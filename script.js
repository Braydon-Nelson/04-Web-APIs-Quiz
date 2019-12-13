$(document).ready(function () {
    var start = document.querySelector("#start");
    var timer = document.querySelector("#timer");
    var spot = document.querySelector("#spot");
    var countDown;
    var timeLeft = 0;
    var totalScore = 100;

    for (let i = 0; i < questionArray.length; i++) {
        let num = Math.floor(Math.random() * i);
        let temp = questionArray[i];
        questionArray[i] = questionArray[num];
        questionArray[num] = temp;
    }

    $(start).on("click", function () {
        timerCount();
        nextQuestion();

        var retry = document.createElement("button");
        retry.setAttribute("type", "button");
        retry.setAttribute("class", "btn btn-primary btn-lg ml-4");
        retry.innerHTML = "Retry";
        spot.append(retry);

        $(retry).on("click", function () {
            window.location.reload();
        });

    });

    function submitQuiz() {
        clearTimeout(countDown);
        $(spot).empty();
        var scoreSpot = document.createElement("h1");
        scoreSpot.setAttribute("class", "display-3");
        var name = prompt("Please input your name");
        scoreSpot.innerHTML = name + " - Score - " + totalScore;
        spot.append(scoreSpot);
    }
    function timerCount() {
        timeLeft = 100;
        var counter = timer;

        countDown = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft < 1) {
                clearTimeout(countDown);
                alert("TIMES UP!!!");
                submitQuiz();
            } else {
                counter.innerHTML = timeLeft + ' seconds remaining';
                console.log(timeleft);
                timeLeft--;
                totalScore--;
            }
        }

    }
    var i = 0;
    function nextQuestion() {

        var question = questionArray[i].title;
        var choices = questionArray[i].choices;
        var answer = questionArray[i].answer;
        console.log(question);
        console.log(choices);
        console.log(answer);

        for (let i = 0; i < choices.length; i++) {
            let num = Math.floor(Math.random() * i);
            let temp = choices[i];
            choices[i] = choices[num];
            choices[num] = temp;
        }

        var questionArea = document.createElement("h3");
        questionArea.setAttribute("class", "question-area");
        questionArea.innerHTML = question;
        spot.appendChild(questionArea);

        for (let i = 0; i < choices.length; i++) {
            var option = document.createElement("button");
            var br = document.createElement("br");
            option.setAttribute("type", "button");
            option.setAttribute("class", "btn option-btn btn-secondary btn-lg mb-3");
            option.setAttribute("data-answer", answer);
            option.innerHTML = choices[i];
            spot.append(option);
            spot.append(br);




        }
        i++;
        $("button").on("click", function () {
            if (this.classList.contains("option-btn")) {
                var userChoice = this.textContent;


                if (userChoice === this.dataset.answer) {
                    console.log("CORRECT!!");
                    this.setAttribute("style", "background-color: green");

                } else if (userChoice != this.dataset.answer) {
                    this.setAttribute("style", "background-color: red");
                    console.log("liaushdfiouashfgiouysdhbfiguyhsdioruyfhosiurf")
                    timeLeft - 20;
                    console.log(timeLeft);
                    totalScore - 20;
                    console.log(totalScore);
                }
                $(spot).empty();
                if (i != questionArray.length) {
                    nextQuestion();
                } else {
                    submitQuiz();
                }

            }
        });
    }

});