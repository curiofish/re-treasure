const missions = [
  {
    icon: '🌱',
    title: '분리수거 실천하기',
    description: '오늘 하루 동안 모은 쓰레기를 올바르게 분리배출 해보세요!',
    bgColor: 'bg-green-50',
  },
  {
    icon: '💧',
    title: '물 절약하기',
    description: '양치컵 사용하고 물을 아껴써서 지구를 지켜주세요!',
    bgColor: 'bg-blue-50',
  },
  {
    icon: '⭐',
    title: '에너지 절약하기',
    description: '사용하지 않는 전기제품의 코드를 뽑아주세요!',
    bgColor: 'bg-yellow-50',
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          오늘의 환경 미션
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`${mission.bgColor} rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all cursor-pointer`}
            >
              <div className="text-4xl mb-4">{mission.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-1 bg-green-500 rounded-full animate-grow" style={{ width: '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 