import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import type { AuthOptions } from 'next-auth';
import { supabase } from '@/lib/supabaseClient';

// 타입 확장 -  NextAuth의 Session 타입을 확장하여 사용자 세션에 discordId 속성을 추가
// 이를 통해 세션 정보에 Discord 사용자 ID를 포함할 수 있음
declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      discordId?: string;
    };
  }
}

// 인증 프로바이더 및 콜백 함수를 설정 -> DiscordProvider를 통해 OAuth 인증
export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  // 이 콜백은 사용자가 Discord로 로그인할 때 호출하고 사용자의 프로필 정보에서 discordId, email, name, avatar를 추출
  callbacks: {
    async signIn({ profile }) {
      const discordProfile = profile as {
        id: string;
        username: string;
        avatar: string;
        email: string;
        global_name: string;
      };

      const discordId = discordProfile.id;
      const email = discordProfile.email;
      const name = discordProfile.username;
      const avatar = discordProfile.avatar;
      const global_name = discordProfile.global_name;
      // discord_id가 일치하는 사용자를 조회하여, 존재하지 않는 경우 새로운 사용자 정보를 discord_users 테이블에 삽입
      try {
        const { data: existingUser } = await supabase
          .from('discord_users')
          .select('*')
          .eq('discord_id', discordId)
          .single();

        if (!existingUser) {
          await supabase.from('discord_users').insert([
            {
              discord_id: discordId,
              email,
              name,
              avatar_url: `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`,
              global_name,
            },
          ]);
        }
        // 오류가 발생하면 콘솔에 에러를 출력하고 기본 경로('/')로 리다이렉트
      } catch (error) {
        console.error('Supabase 저장 오류:', error);
        return '/';
      }
      // 상공하면 true를 반환하여 로그인 성공
      return true;
    },
    async session({ session, token }) {
      session.user.discordId = token.sub as string;
      return session;
    },
  },
};

// HTTP 메소드별로 named export가 필요하다.
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
