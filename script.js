$(document).ready(function () {
    var start = document.querySelector("#start");
    var timer = document.querySelector("#timer");
    var spot = document.querySelector("#spot");

    $(start).on("click", function () {
        for (var i = 0; i < questionArray.length; i++) {
            var question = questionArray[i].question;
            var choices = questionArray[i].choices;
            var answer = questionArray[i].answer;
            console.log(question);
            console.log(choices);
            console.log(answer);



            var questionArea = document.createElement("h3");
            questionArea.setAttribute("class", "question-area")
            questionArea.innerHTML = question;
            spot.appendChild(questionArea);

            for (let i = 0; i < choices.length; i++) {
                var option = document.createElement("button");
                var br = document.createElement("br");
                option.setAttribute("type", "button")
                option.setAttribute("class", "btn option-btn btn-secondary btn-lg mb-3")
                option.setAttribute("data-number", i)
                option.innerHTML = choices[i];
                spot.append(option);
                spot.append(br);

            }

            $("button").on("click", function () {
                if (this.classList.contains("option-btn")) {
                    if (this.innerHTML === questionArray.answer[i]) {
                        console.log("TRUE BOI");
                    }
                }
            });

        }

    })
});