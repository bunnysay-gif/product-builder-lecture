document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoContainer = document.getElementById('lotto-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

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
        lottoContainer.innerHTML = ''; // 기존 번호 삭제
        
        for (let i = 0; i < 6; i++) {
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
            
            // 번호 범위에 따른 색상 지정
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
