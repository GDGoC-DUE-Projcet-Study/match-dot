'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

import logoImage from '@/assets/images/match-dot-logo.png';
import Icon from '@/assets/icon';

export default function Header() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header>
      <div className="flex flex-col flex-wrap items-center p-2 pb-3 mx-auto mt-5 shadow-lg md:flex-row rounded-xl">
        <Image src={logoImage} alt="match-dot-logo" width={122} height={100} />
        <nav className="flex flex-wrap items-center justify-between flex-1 text-base md:ml-auto">
          <div className="flex">
            <Link href="/" className="ml-5 mr-5 hover:text-gray-900">
              <div className="flex">
                <Icon name="IcList" />
                <span className="ml-1">Home</span>
              </div>
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Mach
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Dot
            </Link>
          </div>
          <div className="flex items-center">
            {session ? (
              <Link href={`/user/${session.user.name}`}>
                <Image
                  className="rounded-full"
                  src={session.user.image as string}
                  width={32}
                  height={32}
                  alt={session.user.image as string}
                />
              </Link>
            ) : (
              <button
                className="px-4 py-1 mt-3 mr-2 text-sm font-medium text-blue-600 transition border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={() => signIn()}
              >
                로그인 / 회원가입
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
