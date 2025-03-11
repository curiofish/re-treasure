import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white">
      {/* 헤더 섹션 */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          재활용의 과정
        </h1>
        <p className="text-xl text-gray-600">
          올바른 분리배출로 시작되는 자원 순환의 여정
        </p>
      </header>

      {/* 메인 메뉴 */}
      <nav className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 분리배출 가이드 */}
          <Link href="/guide" 
                className="group p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">분리배출 가이드</h2>
              <p className="text-green-600 mb-4">올바른 분리배출 방법을 알아보세요</p>
              <span className="text-green-500 group-hover:translate-x-2 transition-transform duration-300">
                자세히 보기 →
              </span>
            </div>
          </Link>

          {/* 재활용 과정 */}
          <Link href="/recycle-process"
                className="group p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">재활용 과정</h2>
              <p className="text-blue-600 mb-4">재활용 자원이 새로운 제품으로 탄생하는 과정</p>
              <span className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300">
                자세히 보기 →
              </span>
            </div>
          </Link>

          {/* 자주 묻는 질문 */}
          <Link href="/qa"
                className="group p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">자주 묻는 질문</h2>
              <p className="text-purple-600 mb-4">재활용에 대한 궁금증을 해결해보세요</p>
              <span className="text-purple-500 group-hover:translate-x-2 transition-transform duration-300">
                자세히 보기 →
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </main>
  );
} 