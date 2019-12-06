var startGame = document.getElementById("start")
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
  }]

var quesNum = 0
var score = 0
var guess = ""
var ans = questions[quesNum].answer

startGame.addEventListener("click", function(){

  startGame.classList.add("d-none")
  quizArea.classList.remove("d-none")
  quizArea.classList.add("needs-validation")

  quesLabel.textContent = questions[quesNum].title
  label1.textContent = questions[quesNum].choices[0]
  label2.textContent = questions[quesNum].choices[1]
  label3.textContent = questions[quesNum].choices[2]
  label4.textContent = questions[quesNum].choices[3]
  localStorage.setItem("answer", questions[quesNum].answer)
  localStorage.setItem("score", 0)

  totalSeconds = 180
  clock = startTimer(totalSeconds)
})

function startTimer(duration) {
  return setInterval(function () {
   timer.textContent = duration--;

   if (duration === 0) {
      clearInterval(clock)
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
    }else if (!radios[i].checked) {
        invalid.classList.remove("d-none")
      }}}


  
function checkAns() {
        if (guess!==ans) {
          event.preventDefault()
          invalid.classList.remove("d-none")
        }
          quesNum++
          checkQues()
        }




function checkQues() {
  if(quesNum===questions.length){
    quizArea.classList.add("d-none")
    completeTxt.classList.remove("d-none")
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

          
quizArea.addEventListener("change", function() {

  hideInvalid()

})
                