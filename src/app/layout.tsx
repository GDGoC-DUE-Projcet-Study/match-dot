import { ReactNode } from 'react';

import AuthContext from '../context/AuthContext';

import '@/app/globals.css';
import Footer from '@/components/basic/Footer/Footer';
import Header from '@/components/basic/Header/Header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <body className="min-h-screen flex flex-col max-w-5xl mx-auto">
        <AuthContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
