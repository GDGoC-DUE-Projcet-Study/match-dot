'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <div className="flex flex-col md:items-center md:justify-center md:flex-row">
      <div className="flex py-3 mb-4 border-b-2 md:mr-32 md:flex-col md:text-start md:border-b-0 md:mt-10">
        <div className="px-2 ml-5 text-lg font-semibold border-b-2 border-black md:px-10 md:border-b-0 md:mb-7">
          프로필
        </div>
        <div
          className="px-2 ml-5 text-lg font-semibold text-gray-300 transition duration-300 rounded cursor-pointer md:px-10 hover:bg-gray-100"
          onClick={handleSignOut}
        >
          로그아웃
        </div>
      </div>
      <div className="flex justify-center mt-5 md:justify-center md:border-l-2 md:pl-32">
        <div className="flex">
          <Image
            className="mb-4 rounded-full md:mb-0 md:mr-5"
            src={session?.user.image as string}
            width={90}
            height={90}
            alt={session?.user.image as string}
          />
          <div className="flex flex-col justify-center ml-7 text-start">
            <h3 className="text-lg font-semibold">
              이름 : {session?.user.name}
            </h3>
            <span className="text-zinc-300">
              이메일 : {session?.user.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
