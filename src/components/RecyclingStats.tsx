import { useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function RecyclingStats() {
  useEffect(() => {
    // 폐기물 발생량 및 재활용량 변화 그래프
    const wasteCtx = document.getElementById('wasteChart') as HTMLCanvasElement;
    if (wasteCtx) {
      new Chart(wasteCtx, {
        type: 'bar',
        data: {
          labels: ['생활폐기물 (톤/일)', '재활용품 (톤/일)'],
          datasets: [
            {
              label: '1994년',
              data: [58118, 8927],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2
            },
            {
              label: '2016년',
              data: [54000, 32000],
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '폐기물 발생량 및 재활용량 변화',
              font: {
                size: 16,
                weight: 'bold'
              }
            },
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }

    // 종량제 봉투 내 재활용 가능 자원 비율
    const bagCtx = document.getElementById('bagChart') as HTMLCanvasElement;
    if (bagCtx) {
      new Chart(bagCtx, {
        type: 'doughnut',
        data: {
          labels: ['재활용 가능 자원', '재활용 불가 자원'],
          datasets: [{
            data: [70, 30],
            backgroundColor: [
              'rgba(255, 205, 86, 0.8)',
              'rgba(201, 203, 207, 0.8)'
            ],
            borderColor: [
              'rgba(255, 205, 86, 1)',
              'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: '종량제 봉투 내 재활용 가능 자원 비율',
              font: {
                size: 16,
                weight: 'bold'
              }
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            재활용 현황
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리나라의 재활용 현황과 성과를 한눈에 확인해보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <canvas id="wasteChart"></canvas>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <canvas id="bagChart"></canvas>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-xl font-bold mb-4 text-blue-600">법적 근거</h3>
            <p className="text-gray-600 leading-relaxed">
              자원의 절약과 재활용촉진에 관한 법률에 따라 시행되고 있습니다.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-4 text-green-600">경제 효과</h3>
            <p className="text-gray-600 leading-relaxed">
              종량제 봉투 구매비용 절감과 자원 재활용을 통한 경제적 이익이 발생합니다.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4 text-emerald-600">환경 보호</h3>
            <p className="text-gray-600 leading-relaxed">
              자원 재활용을 통해 환경오염을 감소시키고 지속가능한 발전에 기여합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 