import Link from 'next/link';

const recycleItems = [
  { 
    id: 'paper', 
    name: '종이류', 
    icon: '📄', 
    color: 'from-blue-500/20 to-blue-600/20',
    guide: '물에 젖지 않도록 펴서 묶어 배출 (스프링, 테이프 등은 제거)'
  },
  { 
    id: 'plastic', 
    name: '플라스틱', 
    icon: '🥤', 
    color: 'from-emerald-500/20 to-emerald-600/20',
    guide: '내용물 제거, 라벨 및 뚜껑은 분리하여 배출'
  },
  { 
    id: 'glass', 
    name: '유리', 
    icon: '🫙', 
    color: 'from-green-500/20 to-green-600/20',
    guide: '세척 후 깨지지 않게 주의하며 배출'
  },
  { 
    id: 'can', 
    name: '캔/고철', 
    icon: '🥫', 
    color: 'from-gray-500/20 to-gray-600/20',
    guide: '내용물 제거 후 깨끗하게 배출'
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-blue-50">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-yellow-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            재미있게 배우는<br />
            <span className="text-6xl md:text-8xl">분리수거</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            1995년 쓰레기종량제 도입 이후, 우리나라의 재활용률은 크게 증가했습니다.
            <br className="hidden md:block" />
            올바른 분리배출로 환경도 지키고 경제적 효과도 누려보세요!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {recycleItems.map((item) => (
            <Link
              key={item.id}
              href={`/guide/${item.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {item.guide}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/guide"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            분리수거 배우기
          </Link>
          <Link
            href="/quiz"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            재활용 퀴즈 풀기
          </Link>
        </div>
      </div>
    </section>
  );
} 