import Image from 'next/image';
import React from 'react';

import logoImage from '@/app/assets/images/match-dot-logo.png';

export default function Footer() {
  return (
    <footer className="min-h-[100px] mt-auto">
      <hr />
      <div className="block justify-between sm:flex items-center m-3">
        <div>
          <Image
            src={logoImage}
            className="max-w-min"
            alt="match-dot-logo"
            width={122}
            height={100}
          />
        </div>
        <div className="font-medium">
          <ul className="flex mt-3 sm:mt-0 items-center">
            <li className="px-3">Home</li>
            <li className="px-3">Mach</li>
            <li className="px-3">Dot</li>
          </ul>
        </div>
      </div>
      <div className="m-3 text-gray-400 text-sm">
        <p className="mb-1">
          <span>GDGoC DEU</span>
          <span className="ml-2 pl-2 border-l-2">임승진</span>
        </p>
        <p>동의대학교 컴퓨터공학과</p>
        <hr className="mb-5 mt-5" />
        <div className="flex justify-between">
          <p>© 2024 GDGod Project Study, DEU.</p>
          <div className="flex space-x-3">
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
