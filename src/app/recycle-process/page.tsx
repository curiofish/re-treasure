import Link from 'next/link';

interface Material {
  name: string;
  icon: string;
}

interface RecycleItem {
  from: Material[];
  process?: string[];
  to: Material[];
  icon: string;
  color: string;
}

interface RecycleProcess {
  title: string;
  items: RecycleItem[];
}

const recycleProcesses: RecycleProcess[] = [
  {
    title: '종이류의 재탄생',
    items: [
      {
        from: [
          { name: '종이(폐지)', icon: '📰' },
          { name: '새책이', icon: '📚' },
          { name: '노트', icon: '📓' }
        ],
        process: [
          '종이류 분류',
          '물에 녹여 펄프로 만들기',
          '이물질 제거',
          '표백 및 정선'
        ],
        to: [
          { name: '두루마리 휴지', icon: '🧻' },
          { name: '미용티슈', icon: '🤧' }
        ],
        icon: '📄',
        color: 'blue'
      }
    ]
  },
  {
    title: '금속류의 재탄생',
    items: [
      {
        from: [
          { name: '금속캔', icon: '🥫' },
          { name: '고철류', icon: '🔧' }
        ],
        process: [
          '분류 및 압축',
          '용해',
          '주조',
          '가공'
        ],
        to: [
          { name: '철근', icon: '🏗️' },
          { name: '강판', icon: '🔨' },
          { name: '재활용캔', icon: '🥫' }
        ],
        icon: '🥫',
        color: 'gray'
      }
    ]
  },
  {
    title: '유리의 재탄생',
    items: [
      {
        from: [
          { name: '빈 병', icon: '🫙' }
        ],
        process: [
          '분쇄',
          '선별',
          '용해',
          '성형'
        ],
        to: [
          { name: '유리병', icon: '🫙' },
          { name: '유리블록', icon: '🧊' }
        ],
        icon: '🫙',
        color: 'green'
      }
    ]
  },
  {
    title: '플라스틱의 재탄생',
    items: [
      {
        from: [
          { name: '페트병', icon: '🥤' }
        ],
        process: [
          '분쇄',
          '세척',
          '건조',
          '용융'
        ],
        to: [
          { name: '부직포', icon: '🧵' },
          { name: '의류제품', icon: '👕' },
          { name: '인조솜', icon: '☁️' }
        ],
        icon: '🥤',
        color: 'emerald'
      }
    ]
  },
  {
    title: '기타 재활용',
    items: [
      {
        from: [
          { name: '음식물쓰레기', icon: '🥬' }
        ],
        to: [
          { name: '사료', icon: '🐄' },
          { name: '퇴비', icon: '🌱' },
          { name: '바이오가스 연료', icon: '⚡' }
        ],
        icon: '🥬',
        color: 'yellow'
      }
    ]
  }
];

export default function RecycleProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            아직도 폐기물이 "쓰레기"로만 보이시나요?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            분리배출된 폐기물은 재활용을 통해 다시 자원이 됩니다
          </p>
        </div>

        <div className="space-y-12">
          {recycleProcesses.map((process, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl">{process.items[0].icon}</span>
                  {process.title}
                </h2>
                
                {process.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 처음 모습 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">처음 모습</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          {item.from.map((material, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-2xl">{material.icon}</span>
                              <span className="text-gray-600">{material.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 재활용 과정 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">재활용 과정</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="space-y-4">
                          {item.process?.map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
                                {i + 1}
                              </div>
                              <span className="text-gray-600">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 재탄생 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">재탄생</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          {item.to.map((material, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-2xl">{material.icon}</span>
                              <span className="text-gray-600">{material.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/guide"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="mr-2">분리배출 가이드 보기</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 