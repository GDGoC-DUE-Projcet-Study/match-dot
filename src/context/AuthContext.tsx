'use client';

import { SessionProvider } from 'next-auth/react';

interface AuthProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

// Next.js 는 기본으로 서버 컴포넌트인데 next-auth에서 제공해주는 훅을 사용하려면 클라이언트 컴포넌트여야 한다.
// 그래서 SessionProvider를 클라이언트 컴포넌트로 분리하고, 이 컴포넌트를 layout에서 사용하는 방식으로 구현한다.
