var startGame = document.getElementById("start")
var next = document.getElementById("next")
var totalSeconds = 0
var timeElapsed = 0
var quizArea = document.getElementById("quizArea")
var titleArea = document.getElementById("titleArea")
var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var radio4 = document.getElementById("radio4")
var label1 = document.getElementById("label1")
var label2 = document.getElementById("label2")
var label3 = document.getElementById("label3")
var label4 = document.getElementById("label4")

var radios = [radio1,radio2,radio3,radio4]
var labels = [label1, label2, label3, label4]




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

  quesLabel.textContent = questions[0].title
  label1.textContent = questions[0].choices[0]
  label2.textContent = questions[0].choices[1]
  label3.textContent = questions[0].choices[2]
  label4.textContent = questions[0].choices[3]

  localStorage.add()
}
)

next.addEventListener("click", function() {
  


})

console.log(radios)