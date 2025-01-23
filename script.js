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
                '내부/외부 링크 설정'
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
            name: "베이직 패키지",
            originalPrice: 500000,
            discountRate: 25,
            period: "1년",
            features: [
                "키워드 조회 및 분석",
                "무제한 포스팅",
                "AI 컨텐츠 자동 생성",
                "이미지 자동화",
            ],
            highlight: "합리적인 가격",
            recommended: false
        },
        {
            name: "프리미엄 패키지",
            originalPrice: 1100000,
            discountRate: 30,
            period: "평생",
            features: [
                "베이직 패키지의 모든 기능",
                "키워드 조회 및 분석",
                "무제한 포스팅",
                "AI 컨텐츠 자동 생성",
                "이미지 자동화",
                "애드센스승인 기능",
                "Rank Math 커스텀 플러그인",
            ],
            highlight: "합리적인 가격",
            recommended: true
        },
        {
            name: "엔터프라이즈 패키지",
            originalPrice: 2500000,
            discountRate: 35,
            period: "평생",
            features: [
                "프리미엄 패키지의 모든 기능",
                "GPT 기반 네이버블로그 발행",
                "GPT 기반 티스토리 발행",
                "커스텀 AI 템플릿",
            ],
            highlight: "애드센스 수익화의 끝판왕",
            recommended: false
        }
    ]
};

// 유틸리티 함수
function calculateDiscountedPrice(originalPrice, discountRate) {
    return originalPrice * (1 - discountRate / 100);
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
                        ${product.name === "엔터프라이즈 패키지" ? `
                            <div class="relative">
                                <button class="btn-primary inline-block w-full text-center opacity-50 cursor-not-allowed" disabled>
                                    3월 1일 오픈 예정
                                </button>
                            </div>
                        ` : `
                            <a href="https://open.kakao.com/o/sqAplEke" target="_blank" 
                               class="btn-primary inline-block w-full text-center">
                                시작하기
                            </a>
                        `}
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
    
    const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const calculateTimeBasedValue = (type, baseValue) => {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const hoursPassedToday = (now - startOfDay) / (1000 * 60 * 60);
        
        let increment = 0;
        switch(type) {
            case 'posts':
                // 시간당 1~5개 증가
                increment = Math.floor(hoursPassedToday * getRandomInRange(1, 5));
                break;
            case 'revenue':
                // 시간당 10~2000원 증가
                increment = Math.floor(hoursPassedToday * getRandomInRange(10, 2000));
                break;
            case 'users':
                // 하루에 1~2명 증가
                increment = Math.floor((hoursPassedToday / 24) * getRandomInRange(1, 2));
                break;
        }
        
        return baseValue + increment;
    };

    const animateCounter = (counter) => {
        const type = counter.getAttribute('data-type');
        const baseValue = parseInt(counter.getAttribute('data-base-value') || '0');
        const target = calculateTimeBasedValue(type, baseValue);
        const count = parseInt(counter.innerText.replace(/,/g, ''));
        
        // 애니메이션 속도 조절
        let increment;
        if (type === 'revenue') {
            // 수익은 더 천천히 증가
            increment = target / 500;
        } else {
            // 다른 카운터는 기존 속도
            increment = target / 200;
        }

        if (count < target) {
            // 수익의 경우 콤마 포맷팅 적용
            if (type === 'revenue') {
                counter.innerText = formatNumber(Math.ceil(count + increment));
            } else {
                counter.innerText = Math.ceil(count + increment);
            }
            // 애니메이션 프레임 간격 증가 (더 천천히)
            setTimeout(() => animateCounter(counter), type === 'revenue' ? 30 : 1);
        } else {
            // 최종값에도 수익은 콤마 포맷팅 적용
            if (type === 'revenue') {
                counter.innerText = formatNumber(target);
            } else {
                counter.innerText = target;
            }
        }
        
        // 매 시간마다 값 업데이트
        setTimeout(() => animateCounter(counter), 60 * 60 * 1000);
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
            top: '20%',
            bottom: '60%',
            left: '20%',
            right: '80%'
        };

        // 큰 톱니바퀴 10개 추가
        for(let i = 0; i < 10; i++) {
            const gear = document.createElement('div');
            gear.className = 'hero-gear';
            
            // 중앙 영역을 피해서 위치 설정
            let left, top;
            do {
                left = Math.random() * 90 + 5;
                top = Math.random() * 90 + 5;
            } while (
                left > parseInt(centerArea.left) && 
                left < parseInt(centerArea.right) && 
                top > parseInt(centerArea.top) && 
                top < parseInt(centerArea.bottom)
            );
            
            gear.style.left = `${left}%`;
            gear.style.top = `${top}%`;
            heroSection.appendChild(gear);

            // 작은 톱니바퀴 추가
            const smallGear = document.createElement('div');
            smallGear.className = 'hero-gear hero-gear-small';
            const offsetX = (Math.random() - 0.5) * 60;
            const offsetY = (Math.random() - 0.5) * 60;
            
            // 작은 톱니바퀴도 중앙 영역을 피하도록 확인
            const smallLeft = left + (offsetX / heroSection.offsetWidth * 100);
            const smallTop = top + (offsetY / heroSection.offsetHeight * 100);
            
            if (!(smallLeft > parseInt(centerArea.left) && 
                smallLeft < parseInt(centerArea.right) && 
                smallTop > parseInt(centerArea.top) && 
                smallTop < parseInt(centerArea.bottom))) {
                smallGear.style.left = `calc(${gear.style.left} + ${offsetX}px)`;
                smallGear.style.top = `calc(${gear.style.top} + ${offsetY}px)`;
                heroSection.appendChild(smallGear);
            }
        }
    }
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