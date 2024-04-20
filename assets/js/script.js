    // Define the quiz questions and answers
        const quiz = [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                answer: "Paris"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yen", "Dollar", "Euro", "Pound"],
                answer: "Yen"
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
                answer: "Blue whale"
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
                answer: "Mount Everest"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "Maldives", "San Marino"],
                answer: "Vatican City"
            },
            {
                question: "What is the largest ocean in the world?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean"
            },
        ];

        let currentQuestion = 0; // Track the current question
        let score = 0; // Track the score
        let timeLeft = 5; // Countdown time in seconds

        // Function to display the current question and start the countdown
        function displayQuestion() {
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");
            const countdownElement = document.getElementById("countdown");

            // Display the question
            questionElement.textContent = quiz[currentQuestion].question;

            // Clear the options
            optionsElement.innerHTML = "";

            // Display the options
            quiz[currentQuestion].options.forEach((option, index) => {
                const optionElement = document.createElement("button");
                optionElement.textContent = option;
                optionElement.addEventListener("click", () => {
                    clearInterval(timer); // Stop the countdown when an option is selected
                    checkAnswer(option);
                });
                optionsElement.appendChild(optionElement);
            });

            // Start the countdown
            timeLeft = 5;
            countdownElement.textContent = `Time left: ${timeLeft} seconds`;
            const timer = setInterval(() => {
                timeLeft--;
                countdownElement.textContent = `Time left: ${timeLeft} seconds`;
                if (timeLeft <= 0) {
                    clearInterval(timer); // Stop the countdown when time is up
                    checkAnswer(null); // Proceed to next question without selecting an option
                }
            }, 1000);
        }

        // Function to check the selected answer
        function checkAnswer(selectedOption) {
            if (selectedOption === quiz[currentQuestion].answer) {
                score++; // Increase the score if the answer is correct
            }

            currentQuestion++; // Move to the next question

            if (currentQuestion < quiz.length) {
                displayQuestion(); // Display the next question
            } else {
                displayScore(); // Display the final score
            }
        }

        // Function to display the final score
        function displayScore() {
            const scoreElement = document.getElementById("score");
            scoreElement.textContent = `Your score: ${score}/${quiz.length}`;
        }

        // Function to start the quiz
        function startQuiz() {
            displayQuestion();
        }

        // Start the quiz when the page loads
        window.addEventListener("load", startQuiz);
