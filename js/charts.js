// Chart.js 초기화
async function initCharts() {
    // 월별 재활용률 데이터
    const monthlyData = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
            label: '재활용률 (%)',
            data: [52.1, 53.4, 54.2, 55.1, 55.8, 56.2, 56.5, 56.8, 57.0, 57.1, 57.2, 57.3],
            borderColor: '#2ECC71',
            backgroundColor: 'rgba(46, 204, 113, 0.1)',
            tension: 0.4,
            fill: true
        }]
    };

    // 재활용률 추이 차트
    const ctx = document.getElementById('recycling-trends').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: monthlyData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `재활용률: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 60,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// 재질별 재활용 현황 데이터
const materialData = {
    labels: ['플라스틱', '종이', '유리', '금속', '비닐', '기타'],
    datasets: [{
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
            '#2ECC71',
            '#3498DB',
            '#9B59B6',
            '#F1C40F',
            '#E67E22',
            '#95A5A6'
        ]
    }]
};

// 재질별 재활용 현황 차트
function initMaterialChart() {
    const ctx = document.getElementById('material-distribution');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: materialData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// 지역별 재활용 현황 데이터
const regionalData = {
    labels: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산'],
    datasets: [{
        label: '재활용률',
        data: [62.3, 58.9, 56.4, 55.2, 54.8, 53.9, 53.1, 52.7],
        backgroundColor: 'rgba(46, 204, 113, 0.8)'
    }]
};

// 지역별 재활용 현황 차트
function initRegionalChart() {
    const ctx = document.getElementById('regional-comparison');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: regionalData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `재활용률: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 70,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// 연간 재활용 목표 달성률 게이지 차트
function initGoalChart() {
    const ctx = document.getElementById('recycling-goal');
    if (ctx) {
        new Chart(ctx, {
            type: 'gauge',
            data: {
                datasets: [{
                    value: 85.7,
                    minValue: 0,
                    maxValue: 100,
                    backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77'],
                    data: [33, 66, 100]
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: '2024년 재활용 목표 달성률'
                }
            }
        });
    }
}

// 페이지 로드 시 차트 초기화
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initMaterialChart();
    initRegionalChart();
    initGoalChart();
}); 