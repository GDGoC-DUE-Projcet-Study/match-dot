'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

import IcDiscord from '@/app/assets/icons/IcDiscord';
import logoImage from '@/app/assets/images/match-dot-logo.png';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <div className="container flex flex-col flex-wrap items-center p-2 pb-3 mx-auto mt-5 border-b-2 shadow-md md:flex-row rounded-xl">
        <Image src={logoImage} alt="match-dot-logo" width={122} height={100} />
        <nav className="flex flex-wrap items-center justify-center flex-1 text-base md:ml-auto">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Mach
          </Link>
          <Link href="/" className="mr-5 hover:text-gray-900">
            Dot
          </Link>
        </nav>
        {session ? (
          <button
            className="flex items-center px-2 py-1 mt-1 font-semibold text-blue-600 border-2 border-gray-100 rounded-xl hover:bg-slate-100"
            onClick={() => signOut()}
          >
            <IcDiscord className="mr-2" />
            로그아웃
          </button>
        ) : (
          <button
            className="flex items-center px-2 py-1 mt-1 font-semibold text-blue-600 border-2 border-gray-100 rounded-xl hover:bg-slate-100"
            onClick={() => signIn()}
          >
            <IcDiscord className="mr-2" />
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
