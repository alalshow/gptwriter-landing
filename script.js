// 카드 데이터 정의
const cardData = {
    features: [
        {
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
            title: '최적화 키워드 추출',
            subtitle: '실시간 인기 검색어 수집 및 분석',
            items: [
                '구글/다음/줌 실시간 검색어 자동 수집',
                'AI 기반 핵심 키워드 추출',
                '키워드 PC/모바일 조회수 조회',
                '키워드 경쟁강도 분석'
            ]
        },
        {
            icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
            title: '자동 포스팅',
            subtitle: 'AI 기반 컨텐츠 자동 생성',
            items: [
                'GPT/Gemini 기반 고품질 컨텐츠 생성',
                '즉시발행, 예약발행, 임시저장',
                '프롬프트 커스터마이징',
                '내부/외부 링크 설정',
                '본문저장'
            ]
        },
        {
            icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
            title: 'SEO 최적화',
            subtitle: '검색엔진 최적화 자동화',
            items: [
                'Rank Math 커스텀 플러그인 무료 제공',
                '메타 데이터 자동 최적화',
                '구글/네이버 자동 색인',
                '포커스 키워드 적절 배치'
            ]
        },
        {
            icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
            title: '이미지 최적화',
            subtitle: '고품질 이미지 자동화',
            items: [
                'Pixabay 무제한 이미지 제공',
                '이미지 배치 최적화',
                '썸네일 자동 생성'
            ]
        },
        {
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            title: '빠른 처리 속도',
            subtitle: '평균 1분 이내 컨텐츠 완성',
            items: [
                '실시간 발행 자동화',
                '발행 대기시간 없음'
            ]
        },
        {
            icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
            title: '간편한 설정',
            subtitle: '직관적인 UI와 실시간 API 테스트',
            items: [
                'API 연동 실시간 테스트',
                '설정 저장',
            ]
        }
    ],
    products: [
        {
            name: "스탠다드 패키지",
            originalPrice: 785714,
            discountRate: 30,
            period: "평생",

            features: [
                "워드프레스 자동발행",
                "키워드 분석",
                "키워드 조회",
                "본문 검색(**후기 작성 시 제공기능)",
                "무제한 포스팅",
                "프롬프트 커스터마이징",
                "AI 컨텐츠 자동 생성",
                "픽사베이 무료 이미지 추가",
                "참고링크 추가",
                "Rank Math 커스텀 플러그인",
            ],
            highlight: "합리적인 가격",
            recommended: false
        },
        {
            name: "디럭스 패키지",
            originalPrice: 1414285,
            discountRate: 30,
            period: "평생",
            features: [
                "워드프레스 자동발행",
                "네이버 블로그 자동발행",
                "키워드 분석",
                "키워드 조회",
                "본문 검색(**후기 작성 시 제공기능)",
                "무제한 포스팅",
                "프롬프트 커스터마이징",
                "AI 컨텐츠 자동 생성",
                "픽사베이 무료 이미지 추가",
                "참고링크 추가",
                "Rank Math 커스텀 플러그인",
            ],
            highlight: "프리미엄 콘텐츠",
            recommended: true
        },
        {
            name: "프리미엄 패키지",
            originalPrice: 1857142,
            discountRate: 30,
            period: "평생",
            features: [
                "워드프레스 자동발행",
                "티스토리 자동발행",
                "네이버 블로그 자동발행",
                "키워드 분석",
                "키워드 조회",
                "본문 검색(**후기 작성 시 제공기능)",
                "애드센스 승인",
                "무제한 포스팅",
                "프롬프트 커스터마이징",
                "AI 컨텐츠 자동 생성",
                "픽사베이 무료 이미지 추가",
                "참고링크 추가",
                "Rank Math 커스텀 플러그인",
            ],
            highlight: "애드센스 수익화의 끝판왕",
            recommended: false
        }
    ]
};

// 유틸리티 함수
function calculateDiscountedPrice(originalPrice, discountRate) {
    const discounted = originalPrice * (1 - discountRate / 100);
    return Math.ceil(discounted / 10000) * 10000;  // 만원 단위로 올림
}

function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR').format(price);
}

const formatNumber = (number) => {
    return new Intl.NumberFormat('ko-KR').format(number);
};

// 스크롤 애니메이션 설정
document.addEventListener('DOMContentLoaded', function() {
    // 인터섹션 옵저버 설정
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 랜덤 딜레이로 애니메이션 적용
                const delay = Math.random() * 500;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        });
    }, observerOptions);

    // 모든 애니메이션 요소 관찰
    document.querySelectorAll('.fade-up, .feature-card, .glass-effect').forEach(element => {
        observer.observe(element);
    });

    // Features 섹션 렌더링
    const featuresContainer = document.querySelector('#features .grid');
    if (featuresContainer) {
        featuresContainer.innerHTML = '';
        cardData.features.forEach(feature => {
            const featureCard = `
                <div class="feature-card bg-gray-900 p-10 rounded-lg">
                    <div class="flex gap-4 mb-6">
                        <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${feature.icon}"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold mb-6">${feature.title}</h3>
                            <p class="text-xl mb-6">${feature.subtitle}</p>
                        </div>
                    </div>
                    <ul class="space-y-3 text-gray-400">
                        ${feature.items.map(item => `
                            <li class="flex items-start gap-2">
                                <svg class="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            featuresContainer.insertAdjacentHTML('beforeend', featureCard);
        });
    }

    // Price 섹션 렌더링
    const priceContainer = document.querySelector('#price .grid');
    if (priceContainer) {
        priceContainer.innerHTML = '';
        cardData.products.forEach(product => {
            const discountedPrice = calculateDiscountedPrice(product.originalPrice, product.discountRate);
            const card = `
                <div class="glass-effect rounded-lg shadow-xl overflow-hidden ${product.recommended ? 'border-2 border-yellow-500' : ''}">
                    <div class="p-8">
                        ${product.recommended ? '<div class="text-yellow-500 font-bold mb-4">추천 패키지</div>' : ''}
                        <h3 class="text-2xl font-bold mb-4">${product.name}</h3>
                        <div class="mb-8">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-gray-400 line-through text-lg">₩${formatPrice(product.originalPrice)}</span>
                                <span class="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                                    ${product.discountRate}% OFF
                                </span>
                            </div>
                            <div class="text-5xl font-bold text-yellow-500 mb-2">
                                ₩${formatPrice(discountedPrice)}
                            </div>
                            <div class="text-gray-400">${product.period}</div>
                        </div>
                        <div class="text-lg font-bold text-yellow-400 mb-6">
                            ${product.highlight}
                        </div>
                        <ul class="space-y-4 mb-8">
                            ${product.features.map(feature => `
                                <li class="flex items-center gap-2">
                                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <a href="https://open.kakao.com/o/seWPrXbh" target="_blank" 
                           class="btn-primary inline-block w-full text-center">
                            시작하기
                        </a>
                    </div>
                </div>
            `;
            priceContainer.insertAdjacentHTML('beforeend', card);
        });
    }

    // 호버 효과 적용
    const textElements = document.querySelectorAll('h3, p:not(.gradient-text)');
    textElements.forEach(element => {
        element.classList.add('hover-effect');
    });

    // 공장 요소 추가
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('factory-bg');
        
        // 더 많은 톱니바퀴 추가
        const gearCount = 5;
        for(let i = 0; i < gearCount; i++) {
            const gear = document.createElement('div');
            gear.className = 'gear';
            gear.style.left = `${Math.random() * 90 + 5}%`;
            gear.style.top = `${Math.random() * 90 + 5}%`;
            section.appendChild(gear);

            // 작은 톱니바퀴 추가
            const smallGear = document.createElement('div');
            smallGear.className = 'gear gear-small';
            smallGear.style.left = `${Math.random() * 90 + 5}%`;
            smallGear.style.top = `${Math.random() * 90 + 5}%`;
            section.appendChild(smallGear);
        }
    });

    // 카운터 애니메이션
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const type = counter.getAttribute('data-type');
        const baseValue = parseInt(counter.getAttribute('data-base-value') || '0');
        const count = parseInt(counter.innerText.replace(/,/g, ''));
        
        const duration = 2000; // 2초 동안 애니메이션
        const frames = 60;
        const increment = (baseValue - count) / frames;

        let currentCount = count;
        const updateCounter = () => {
            currentCount += increment;
            if (currentCount <= baseValue) {
                if (type === 'revenue') {
                    counter.innerText = formatNumber(Math.floor(currentCount));
                } else {
                    counter.innerText = Math.floor(currentCount);
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (type === 'revenue') {
                    counter.innerText = formatNumber(baseValue);
                } else {
                    counter.innerText = baseValue;
                }
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
            }
        });
    };

    const counterObserver = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // 히어로 섹션에 톱니바퀴 추가
    const heroSection = document.querySelector('.hero-pattern');
    if (heroSection) {
        const centerArea = {
            top: 20,
            bottom: 60,
            left: 20,
            right: 80
        };

        // 큰 톱니바퀴 10개 추가
        for(let i = 0; i < 10; i++) {
            const gear = document.createElement('div');
            gear.className = 'hero-gear';
            
            // 중앙 영역을 피해서 위치 설정 (5% ~ 95% 사이)
            let left, top;
            do {
                left = Math.random() * 90 + 5;
                top = Math.random() * 90 + 5;
            } while (
                left > centerArea.left && 
                left < centerArea.right && 
                top > centerArea.top && 
                top < centerArea.bottom
            );
            
            // transform 사용을 위해 중앙을 기준으로 위치 설정
            gear.style.left = `${left}%`;
            gear.style.top = `${top}%`;
            heroSection.appendChild(gear);

            // 작은 톱니바퀴 추가 - 무작위 위치에 배치하고 viewport 바깥으로 나가지 않도록 함
            if (Math.random() > 0.3) { // 70% 확률로만 작은 톱니바퀴 추가
                const smallGear = document.createElement('div');
                smallGear.className = 'hero-gear hero-gear-small';
                
                // 안전한 범위 내에서 작은 톱니바퀴 위치 설정 (10% ~ 90%)
                const smallLeft = Math.random() * 80 + 10;
                const smallTop = Math.random() * 80 + 10;
                
                // 중앙 영역 피하기
                if (!(smallLeft > centerArea.left && 
                    smallLeft < centerArea.right && 
                    smallTop > centerArea.top && 
                    smallTop < centerArea.bottom)) {
                    smallGear.style.left = `${smallLeft}%`;
                    smallGear.style.top = `${smallTop}%`;
                    heroSection.appendChild(smallGear);
                }
            }
        }
    }

    // 애니메이션 효과
    initFadeEffects();
    
    // 스크롤 탑 버튼
    initScrollToTop();
    
    // 카운터 애니메이션
    initCounters();
    
    // 라이브 활동 업데이트
    initLiveActivity();
    
    // 메인 페이지 FAQ 미리보기 섹션 클릭 이벤트
    initFaqPreview();
});

// 스크롤 탑 버튼 기능
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.opacity = '1';
    } else {
        scrollToTopButton.style.opacity = '0';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 스무스 스크롤 구현
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 페이드 애니메이션 효과
function initFadeEffects() {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
}

// 카운터 애니메이션
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-base-value'));
        const type = counter.getAttribute('data-type');
        let increment = 1;
        
        if (type === 'revenue') {
            increment = 10000;
        } else if (type === 'posts') {
            increment = 10;
        }
        
        const duration = 2000; // ms
        const steps = 50;
        const stepValue = Math.ceil(target / steps);
        let current = 0;
        
        const timer = setInterval(() => {
            current += stepValue;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (type === 'revenue') {
                counter.textContent = current.toLocaleString();
            } else {
                counter.textContent = current;
            }
        }, duration / steps);
    });
}

// 라이브 활동 업데이트
function initLiveActivity() {
    const activityCard = document.querySelector('.activity-card');
    if (!activityCard) return;
    
    const activities = [
        '사용자가 새 포스팅을 생성했습니다',
        '수익이 발생했습니다 (₩3,500)',
        '새로운 사용자가 등록했습니다',
        '방문자가 증가했습니다 (+28)',
        '포스팅이 완료되었습니다'
    ];
    
    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const activityElement = activityCard.querySelector('span');
        
        if (activityElement) {
            activityElement.textContent = randomActivity;
            
            // 깜빡임 효과
            activityElement.style.opacity = '0';
            setTimeout(() => {
                activityElement.style.opacity = '1';
            }, 300);
        }
    }, 5000);
}

// FAQ 미리보기 섹션 클릭 이벤트
function initFaqPreview() {
    const faqItems = document.querySelectorAll('#faq-preview .faq-item');
    if (faqItems.length === 0) return;
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = 'faq.html';
        });
    });
}

// FAQ 페이지 기능 (faq.html에서 사용)
if (window.location.pathname.includes('faq.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        // FAQ 탭 필터링 기능
        const faqTabs = document.querySelectorAll('.faq-tab');
        faqTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 탭 활성화 상태 변경
                faqTabs.forEach(t => {
                    t.classList.remove('active', 'bg-yellow-600');
                    t.classList.add('bg-gray-700');
                });
                tab.classList.add('active', 'bg-yellow-600');
                tab.classList.remove('bg-gray-700');

                // 카테고리 필터링
                const category = tab.getAttribute('data-category');
                const faqItems = document.querySelectorAll('.faq-item');
                faqItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
} 