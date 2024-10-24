import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
const scopes = ['identify'].join(' ');

const options = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: { params: { scope: scopes } },
    }),
  ],
};

// HTTP 메소드별로 named export가 필요하다.
export const GET = NextAuth(options);
export const POST = NextAuth(options);
