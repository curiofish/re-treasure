import Link from 'next/link';

const faqs = [
  {
    question: '재활용품은 왜 깨끗이 씻어서 버려야 하나요?',
    answer: '이물질이 묻은 재활용품은 재활용 과정에서 품질을 저하시키고, 때로는 전체 재활용품을 오염시켜 재활용이 불가능하게 만들 수 있습니다. 깨끗한 상태로 배출하면 고품질의 재활용이 가능합니다.'
  },
  {
    question: '플라스틱 분리배출 시 라벨은 꼭 제거해야 하나요?',
    answer: '네, 페트병의 라벨은 페트병과 다른 재질이므로 분리해서 배출해야 합니다. 라벨은 일반 플라스틱으로 분류되고, 페트병은 PET로 분류되어 각각 다른 방식으로 재활용됩니다.'
  },
  {
    question: '재활용 마크가 없는 플라스틱은 어떻게 버려야 하나요?',
    answer: '재활용 마크가 없는 플라스틱은 일반쓰레기로 배출해야 합니다. 재활용 마크가 없는 제품은 재활용이 어렵거나 불가능한 복합 재질로 만들어졌을 가능성이 높습니다.'
  },
  {
    question: '피자 박스는 재활용이 가능한가요?',
    answer: '기름이나 음식물이 묻지 않은 깨끗한 부분만 재활용이 가능합니다. 기름이 많이 묻은 피자 박스는 일반쓰레기로 배출해야 합니다. 박스를 깨끗한 부분과 오염된 부분으로 분리해서 배출하는 것을 추천합니다.'
  },
  {
    question: '스티로폼은 어떻게 분리배출 하나요?',
    answer: '스티로폼은 내용물을 비우고 이물질을 제거한 후, 가능한 한 부피를 줄여서 배출합니다. 색이 있는 스티로폼이나 이물질이 제거되지 않는 스티로폼은 일반쓰레기로 배출해야 합니다.'
  }
];

export default function QAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            자주 묻는 질문
          </h1>
          <p className="text-lg text-gray-600">
            재활용에 대한 궁금증을 해결해드립니다
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="text-2xl text-green-500">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="mr-2">← 홈으로 돌아가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 