import Link from 'next/link';

const paperGuide = {
  title: '종이류 분리배출',
  description: '종이류는 재활용이 가능한 대표적인 자원입니다. 올바른 분리배출로 자원을 절약하고 환경을 보호할 수 있습니다.',
  types: [
    {
      name: '신문지',
      guide: '물기에 젖지 않도록 하고 반듯하게 펴서 차곡차곡 쌓은 후 묶어서 배출',
      examples: ['일간신문', '주간신문', '지역신문']
    },
    {
      name: '책자/노트',
      guide: '스프링 등 종이류와 다른 재질은 제거 후 배출',
      examples: ['교과서', '참고서', '전화번호부', '노트']
    },
    {
      name: '종이박스',
      guide: '테이프 등 부착물을 제거하고 접어서 배출',
      examples: ['골판지 상자', '과자 상자', '택배 상자']
    },
    {
      name: '기타',
      guide: '종이류와 다른 재질은 제거 후 배출',
      examples: ['포장지', '광고지', '쇼핑백']
    }
  ],
  cautions: [
    '물에 젖은 종이는 재활용이 불가능합니다',
    '코팅된 종이(광고지 등)는 일반쓰레기로 배출',
    '감열지(영수증 등)는 일반쓰레기로 배출',
    '카본지는 일반쓰레기로 배출'
  ],
  benefits: [
    '나무 보호 효과',
    '온실가스 감축',
    '자원 절약',
    '쓰레기 매립장 수명 연장'
  ]
};

export default function PaperGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-8">
          <Link
            href="/guide"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            ← 가이드 목록으로
          </Link>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">📄</div>
              <div>
                <h1 className="text-3xl font-bold text-blue-600 mb-2">{paperGuide.title}</h1>
                <p className="text-gray-600">{paperGuide.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {paperGuide.types.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.guide}</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-2">예시</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">주의사항</h3>
                <ul className="space-y-2">
                  {paperGuide.cautions.map((caution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500">⚠</span>
                      <span className="text-gray-600">{caution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">재활용 효과</h3>
                <ul className="space-y-2">
                  {paperGuide.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 