var startGame = document.getElementById("start")
var showHigh = document.getElementById("showHigh")
var next = document.getElementById("next")
var totalSeconds = 0
var timeElapsed = 0
var clock = null
var timer = document.getElementById("timer")
var completeTxt = document.getElementById("complete")
var quizArea = document.getElementById("quizArea")
var titleArea = document.getElementById("titleArea")
var invalid = document.getElementById("invalid")
var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var radio4 = document.getElementById("radio4")
var label1 = document.getElementById("label1")
var label2 = document.getElementById("label2")
var label3 = document.getElementById("label3")
var label4 = document.getElementById("label4")
var staticScore = document.getElementById("staticScore")
var highScore = document.getElementById("high")
var highName = document.getElementById("highName")

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










var quesNum = 0
var score = 0
var guess = ""
var ans = questions[quesNum].answer



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

function startTimer(duration) {
  return setInterval(function () {
   timer.textContent = --duration;

   if (duration <= 0) {
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





function checkRadios() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        guess = labels[i].textContent
        console.log(guess)
        checkAns()
        console.log("hey")
        radios[i].checked = false
    }
    }}


  
function checkAns() {
        if (guess!==ans) {
          event.preventDefault()
          invalid.classList.remove("d-none")
        } else {
          quesNum++
          checkQues()
        }}



function logScore() {
  document.getElementById("score").textContent = totalSeconds
  staticScore.setAttribute("value", "Score: " + totalSeconds)
  event.preventDefault()
}

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



function hideInvalid() {
  invalid.classList.add("d-none")
}





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
                

    
highScore.addEventListener("click", function() {
  localStorage.setItem("highScores","")
  highName.setAttribute("value",highName.value)

  console.log(highName.getAttribute("value"))
  var existingEntries = localStorage.getItem("highScores")
    var entryTitle = highName.value
    var entryText = staticScore.getAttribute("value")
          var hallFame = {
            "name" : entryTitle,
            "score" : entryText
          }
          localStorage.setItem("highScores", JSON.stringify(hallFame))
          // Save allEntries back to local storage
          
})

showHigh.addEventListener("click", function() {
  
  document.getElementById("highs").classList.remove("d-none")
var scoreArea = document.getElementById("highs")
var scoreGet = localStorage.getItem("highScores")
var scoreArr = JSON.stringify(JSON.parse(scoreGet))
scoreArea.textContent = scoreArr
  
})