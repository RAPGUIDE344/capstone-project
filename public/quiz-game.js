// Correct answers
    const answers = {
        q1: 'a', q2: 'b', q3: 'b', q4: 'c', q5: 'b',
        q6: 'b', q7: 'c', q8: 'b', q9: 'b', q10: 'b',
        q11: 'b', q12: 'b', q13: 'b', q14: 'c', q15: 'c',
        q16: 'b', q17: 'a', q18: 'b', q19: 'b', q20: 'b'
    };

    function checkQuiz() {
        const form = document.getElementById('quiz');
        const resultDiv = document.getElementById('result');
        let score = 0;
        let total = Object.keys(answers).length;
        let feedback = '';

        for (let key in answers) {
            const selected = form.elements[key].value;
            if (selected === answers[key]) {
                score++;
                feedback += `<p class="correct">Question ${key.slice(1)}: Correct</p>`;
            } else {
                feedback += `<p class="incorrect">Question ${key.slice(1)}: Incorrect (Correct: ${answers[key]})</p>`;
            }
        }

        resultDiv.innerHTML = `<p>You scored ${score} out of ${total}.</p>` + feedback;
    }

    function checkAnswer(selected, btn) {
        const correct = quizData[currentQuestion].correct;
        const allBtns = document.querySelectorAll('.option-btn');

        allBtns.forEach(btn => {
            btn.disabled = true;
        });

        if (selected === correct) {
            btn.classList.add('correct');
            score++;
        } else {
            btn.classList.add('wrong');
            allBtns[correct].classList.add("correct");
        }

        // Enable the next button only AFTER an answer is clicked
        const nextBtn = document.getElementById("next-btn");
        nextBtn.style.display = "inline-block";
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    }
