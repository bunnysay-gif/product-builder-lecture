document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoContainer = document.getElementById('lotto-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 탭 전환 기능
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.dataset.tab;

            // 1. 모든 네비게이션 아이템 비활성화
            navItems.forEach(nav => nav.classList.remove('active'));
            // 2. 모든 컨텐츠 숨기기
            tabContents.forEach(content => content.classList.remove('active'));

            // 3. 클릭된 아이템 활성화
            item.classList.add('active');
            // 4. 대상 컨텐츠 보여주기
            const targetContent = document.getElementById(tabName);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // 페이지 상단으로 이동
            window.scrollTo(0, 0);
        });
    });

    // 테마 토글 기능
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '라이트 모드';
        } else {
            themeToggle.textContent = '다크 모드';
        }
    });

    // 로또 번호 생성 기능
    generateBtn.addEventListener('click', () => {
        lottoContainer.innerHTML = ''; 
        
        for (let i = 0; i < 5; i++) {
            const lottoSet = generateLottoNumbers();
            displayLottoSet(lottoSet);
        }
    });

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
            }
        }
        return numbers.sort((a, b) => a - b);
    }

    function displayLottoSet(numbers) {
        const setDiv = document.createElement('div');
        setDiv.className = 'lotto-set';
        
        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = num;
            
            if (num <= 10) ball.classList.add('color1');
            else if (num <= 20) ball.classList.add('color2');
            else if (num <= 30) ball.classList.add('color3');
            else if (num <= 40) ball.classList.add('color4');
            else ball.classList.add('color5');
            
            setDiv.appendChild(ball);
        });
        
        lottoContainer.appendChild(setDiv);
    }
});
