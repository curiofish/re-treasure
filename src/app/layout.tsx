import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '재미있게 배우는 분리수거',
  description: '어린이를 위한 재활용 교육 웹사이트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-green-600">
                  Re:Treasure
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/guide" className="text-gray-600 hover:text-green-600">가이드</a>
                <a href="/quiz" className="text-gray-600 hover:text-green-600">퀴즈</a>
                <a href="/about" className="text-gray-600 hover:text-green-600">소개</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-500">© 2024 Re:Treasure. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 