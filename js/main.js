// 모바일 메뉴 토글
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobile-menu-button';
mobileMenuButton.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.header-container').insertBefore(mobileMenuButton, document.querySelector('.nav-menu'));

mobileMenuButton.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// 실시간 카운터 애니메이션
function animateCounter(element, target, duration = 2000) {
    const start = parseInt(element.innerText.replace(/,/g, ''));
    const increment = (target - start) / (duration / 16);
    let current = start;

    const updateCounter = () => {
        current += increment;
        if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
            element.innerText = target.toLocaleString();
            return;
        }
        element.innerText = Math.round(current).toLocaleString();
        requestAnimationFrame(updateCounter);
    };

    updateCounter();
}

// Intersection Observer로 요소가 화면에 보일 때 애니메이션 시작
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

// 환경 영향 실시간 업데이트
function updateEnvironmentalImpact() {
    const treesSaved = document.getElementById('trees-saved');
    const waterSaved = document.getElementById('water-saved');
    const energySaved = document.getElementById('energy-saved');

    // 초기 타겟 설정
    treesSaved.setAttribute('data-target', '17283');
    waterSaved.setAttribute('data-target', '52419');
    energySaved.setAttribute('data-target', '31052');

    // Intersection Observer에 요소 등록
    counterObserver.observe(treesSaved);
    counterObserver.observe(waterSaved);
    counterObserver.observe(energySaved);

    // 매 분마다 값 증가
    setInterval(() => {
        ['trees-saved', 'water-saved', 'energy-saved'].forEach(id => {
            const element = document.getElementById(id);
            const currentValue = parseInt(element.innerText.replace(/,/g, ''));
            const increment = Math.floor(Math.random() * 10) + 1;
            const newValue = currentValue + increment;
            element.setAttribute('data-target', newValue);
            animateCounter(element, newValue, 1000);
        });
    }, 60000);
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.story-card, .stat-item, .action-card');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

// 뉴스레터 폼 제출
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            const button = form.querySelector('button');
            const originalText = button.innerText;

            try {
                button.innerText = '처리중...';
                button.disabled = true;

                // 실제 API 호출 대신 타이머 사용
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 성공 메시지 표시
                const successMessage = document.createElement('p');
                successMessage.className = 'newsletter-success';
                successMessage.innerText = '구독해 주셔서 감사합니다!';
                form.replaceWith(successMessage);

            } catch (error) {
                button.innerText = originalText;
                button.disabled = false;
                alert('구독 처리 중 오류가 발생했습니다. 다시 시도해 주세요.');
            }
        });
    }
}

// AI 도우미 모달
function openAIHelper() {
    const modal = document.createElement('div');
    modal.className = 'ai-helper-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h2>AI 분리배출 도우미</h2>
            <p>재활용하고자 하는 제품을 촬영하거나 설명해 주세요.</p>
            <div class="input-methods">
                <button class="camera-button">
                    <i class="fas fa-camera"></i>
                    사진 촬영
                </button>
                <button class="text-button">
                    <i class="fas fa-keyboard"></i>
                    텍스트로 설명
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    updateEnvironmentalImpact();
    initScrollAnimations();
    initNewsletterForm();
}); 