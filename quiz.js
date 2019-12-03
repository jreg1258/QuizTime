var startGame = document.getElementById("start")
var totalSeconds = 0
var timeElapsed = 0
var quizArea = document.getElementById("quizArea")
var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var radio4 = document.getElementById("radio4")
var radio1 = document.getElementById("label1")
var radio1 = document.getElementById("label2")
var radio1 = document.getElementById("label3")
var radio1 = document.getElementById("label4")


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
  radio1.textContent = questions[0].choices[0]

}
)
