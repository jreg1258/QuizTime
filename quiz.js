var startGame = document.getElementById("start")
var totalSeconds = 0
var timeElapsed = 0
var quizArea = document.getElementById("quizArea")
var radio1 = document.getElementById("radio1")


var questions = [
    { title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
]

startGame.addEventListener("click", function(){

  startGame.classList.add("d-none")
  quizArea.classList.remove("d-none")

  quizArea.textContent = questions[0].title
  quizArea.appendChild(listItem)
  quizArea.querySelector("li").textContent = questions[0].choices;

}
)
