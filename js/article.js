// 공유 버튼 기능
document.addEventListener('DOMContentLoaded', function() {
    // Facebook 공유
    const facebookBtn = document.querySelector('.share-button.facebook');
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            window.open(shareUrl, 'FacebookShare', 'width=626,height=436');
        });
    }

    // Twitter 공유
    const twitterBtn = document.querySelector('.share-button.twitter');
    if (twitterBtn) {
        twitterBtn.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);
            const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            window.open(shareUrl, 'TwitterShare', 'width=626,height=436');
        });
    }

    // 카카오톡 공유
    const kakaoBtn = document.querySelector('.share-button.kakao');
    if (kakaoBtn && window.Kakao) {
        kakaoBtn.addEventListener('click', function() {
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: document.title,
                    description: document.querySelector('.article-subtitle p').textContent,
                    imageUrl: document.querySelector('.article-hero-image').src,
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href
                    }
                },
                buttons: [
                    {
                        title: '자세히 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href
                        }
                    }
                ]
            });
        });
    }

    // 스크롤 애니메이션
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 관찰할 요소들 선택
    const elements = document.querySelectorAll('.article-section, .highlight-item, .factor');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // 요소가 화면에 보일 때 적용할 CSS
    const style = document.createElement('style');
    style.textContent = `
        .article-section.visible,
        .highlight-item.visible,
        .factor.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}); 