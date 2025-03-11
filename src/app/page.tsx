import Hero from '@/components/Hero';
import RecyclingStats from '@/components/RecyclingStats';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            재활용의 과정
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            올바른 분리배출로 시작되는 자원 순환의 여정
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/recycle-process"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">재활용 과정 알아보기</span>
              <span>→</span>
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">분리배출 가이드</span>
              <span>→</span>
            </Link>
            <Link
              href="/qa"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">자주 묻는 질문</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
      <RecyclingStats />
    </main>
  );
} 