import Link from 'next/link';

const guideItems = [
  {
    id: 'paper',
    title: '종이류',
    icon: '📄',
    description: '신문지, 책자, 노트 등',
    details: [
      '물에 젖지 않도록 하기',
      '반듯하게 펴서 차곡차곡 쌓아 묶기',
      '스프링, 테이프 등 다른 재질은 제거',
      '코팅된 종이, 감열지, 카본지는 일반쓰레기'
    ],
    color: 'blue'
  },
  {
    id: 'plastic',
    title: '플라스틱',
    icon: '🥤',
    description: 'PET병, 플라스틱 용기 등',
    details: [
      '내용물을 비우고 깨끗이 헹구기',
      '라벨, 뚜껑 등 다른 재질은 분리',
      '찌그러뜨려 부피 줄이기',
      '오염된 플라스틱은 일반쓰레기'
    ],
    color: 'emerald'
  },
  {
    id: 'glass',
    title: '유리',
    icon: '🫙',
    description: '음료수병, 기타 유리병',
    details: [
      '내용물을 비우고 깨끗이 헹구기',
      '라벨 등 다른 재질 제거',
      '깨진 유리는 신문지에 싸서 배출',
      '도자기류, 전구는 일반쓰레기'
    ],
    color: 'green'
  },
  {
    id: 'can',
    title: '캔/고철',
    icon: '🥫',
    description: '음료수캔, 통조림캔 등',
    details: [
      '내용물을 비우고 깨끗이 헹구기',
      '알루미늄캔과 철캔 구분 없이 배출',
      '찌그러뜨려 부피 줄이기',
      '페인트캔 등 유해물질은 분리'
    ],
    color: 'gray'
  }
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            분리배출 가이드
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            올바른 분리배출로 지구를 지키는 방법을 알아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guideItems.map((item) => (
            <Link
              key={item.id}
              href={`/guide/${item.id}`}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`p-8 bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/10`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{item.icon}</div>
                  <div>
                    <h2 className={`text-2xl font-bold text-${item.color}-600 mb-1`}>{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="mr-2">퀴즈 풀어보기</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 