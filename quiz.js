var startGame = document.getElementById("start")
var showHigh = document.getElementById("showHigh")
var next = document.getElementById("next")
var startOver = document.getElementById("startOver")
var timer = document.getElementById("timer")
var completeTxt = document.getElementById("complete")
var quizArea = document.getElementById("quizArea")
var titleArea = document.getElementById("titleArea")
var invalid = document.getElementById("invalid")
var staticScore = document.getElementById("staticScore")
var setHighScore = document.getElementById("high")
var highName = document.getElementById("highName")
//buttons, text and timer elements 

var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var radio4 = document.getElementById("radio4")
var label1 = document.getElementById("label1")
var label2 = document.getElementById("label2")
var label3 = document.getElementById("label3")
var label4 = document.getElementById("label4")
//radios and labels

var radios = [radio1,radio2,radio3,radio4]
var labels = [label1, label2, label3, label4]
//radios and labels arrays

var totalSeconds = 0
var timeElapsed = 0
var clock = null
var quesNum = 0
var score = 0
var guess = ""
var ans = questions[quesNum].answer
//function variables

var questions = [
    { title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<script>", "</scripted>", "<js>"],
    answer: "<script>"
  },
  {
    title: "Which of the following is the correct syntax to display “Joey Rocks!” in an alert box using JavaScript?",
    choices: ["alertbox(“Joey Rocks!”)", "msg(“Joey Rocks!”)","msgbox(“Joey Rocks!”)", "alert(“Joey Rocks!”)"],
    answer: "alert(“Joey Rocks!”)"
  },
  {
    title: "Which is NOT a method of declaring a variable?",
    choices: ["function", "const", "let", "var"],
    answer: "function"
  },
  ]
//quiz questions



function hideInvalid() {
  invalid.classList.add("d-none")
}
//hide invalid text


function logScore() {
  document.getElementById("score").textContent = totalSeconds
  staticScore.setAttribute("value", "Score: " + totalSeconds)
  event.preventDefault()
}
//log score


function startTimer(duration) {
  return setInterval(function () {
   timer.textContent = --duration;

   if (duration < 0) {
      clearInterval(clock)
      timer.textContent = 0
      totalSeconds = 0
      quizArea.classList.add("d-none")
    completeTxt.classList.remove("d-none")
    logScore()
    } 
  }, 1000);
}
//start the quiz, show the quiz, and start timer ^


function checkQues() {
  if(quesNum===questions.length){
    quizArea.classList.add("d-none")
    completeTxt.classList.remove("d-none")
    clearInterval(clock)
    logScore()
   } else {
    
        quesLabel.textContent = questions[quesNum].title
        label1.textContent = questions[quesNum].choices[0]
        label2.textContent = questions[quesNum].choices[1]
        label3.textContent = questions[quesNum].choices[2]
        label4.textContent = questions[quesNum].choices[3] 
        localStorage.setItem("answer", questions[quesNum].answer)
        ans = questions[quesNum].answer
        hideInvalid()
      }
}   
//check if there are any more questions, if not, show complete page and show timer value as score


function checkAns() {
  if (guess!==ans) {
    event.preventDefault()
    invalid.classList.remove("d-none")
  } else {
    quesNum++
    checkQues()
  }}
//verify if answer is correct, then increase question number



function checkRadios() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        guess = labels[i].textContent
        checkAns()
        radios[i].checked = false
    }
    }}
//verify a radio has been checked, then log the corresponding labels text as the guess




startGame.addEventListener("click", function(){

  startGame.classList.add("d-none")
  showHigh.classList.add("d-none")
  document.getElementById("highs").classList.add("d-none")
  quizArea.classList.remove("d-none")
  quizArea.classList.add("needs-validation")

  quesLabel.textContent = questions[quesNum].title
  label1.textContent = questions[quesNum].choices[0]
  label2.textContent = questions[quesNum].choices[1]
  label3.textContent = questions[quesNum].choices[2]
  label4.textContent = questions[quesNum].choices[3]
  localStorage.setItem("answer", questions[quesNum].answer)
  localStorage.setItem("score", 0)

  totalSeconds = 181
  clock = startTimer(totalSeconds)
})

next.addEventListener("click", function() {    
  checkRadios()
      if (guess!==ans) {
        clearInterval(clock)
        var timer3 = parseInt(timer.textContent.trim())
        totalSeconds = timer3 - 12
        clock = startTimer(totalSeconds,timer)
  }
  event.preventDefault()
})
                

    
setHighScore.addEventListener("click", function() {
  localStorage.setItem("highScores","")
  highName.setAttribute("value",highName.value)
    var entryTitle = highName.value
    var entryText = staticScore.getAttribute("value")
    var hallFame = {
       "name" : entryTitle,
       "score" : entryText
    }
  localStorage.setItem("highScores", JSON.stringify(hallFame))       
})

showHigh.addEventListener("click", function() {
  
  document.getElementById("highs").classList.remove("d-none")
  var scoreArea = document.getElementById("highs")
  var scoreGet = localStorage.getItem("highScores")
  var scoreArr = JSON.stringify(JSON.parse(scoreGet))
  scoreArea.textContent = scoreArr
})


startOver.addEventListener("click", function() {
  completeTxt.classList.add("d-none")
  startGame.classList.remove("d-none")
  showHigh.classList.remove("d-none")
  document.getElementById("highs").classList.remove("d-none")
})