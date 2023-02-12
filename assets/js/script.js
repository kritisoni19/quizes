const quizes = [
  {
    id:1,
    ques:'Q1.Inside which HTML element do we put the JavaScript?',
    opt1: '<scripting>',
    opt2: '<script>',
    opt3: '<js>',
    opt4: '<javascript>',
    ans:'ans2'
  },
  {
    id:2,
    ques:'Q2.How can a datatype be declared to be a constant type?',
    opt1: 'const',
    opt2: 'let',
    opt3: 'var',
    opt4: 'constant',
    ans:'ans1'
  },
  {
    id:3,
    ques:'Q3.Which of the following is not a Javascript framework?',
    opt1: 'Node',
    opt2: 'Vue',
    opt3: 'React',
    opt4: 'Casandra',
    ans:'ans4'
  },
  {
    id:4,
    ques:'Q4.How to stop an interval timer in Javascript?',
    opt1: 'clearInterval',
    opt2: 'clearTimer',
    opt3: 'intervalOver',
    opt4: 'None of the above',
    ans:'ans1'
  }
   

]


const question = document.querySelector('.question_title');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answerall = document.querySelectorAll('.answers');
const finalScore = document.querySelector('#finalScore');

let questionCount = 0;

const loadFunc = ()=>{
  //console.log(quizes[questionCount].ques);
  question.innerText = quizes[questionCount].ques;
  option1.innerText = quizes[questionCount].opt1;
  option2.innerText = quizes[questionCount].opt2;
  option3.innerText = quizes[questionCount].opt3;
  option4.innerText = quizes[questionCount].opt4;
}
loadFunc();

let answer;

let score = 0;
const getCheckAnswer = ()=>{
  answerall.forEach((currEle)=>{
      if(currEle.checked){
        answer = currEle.id;
      }
  })
  return answer;
}
// deselect the all selected radio buttons
const deselectAll = ()=>{
    answerall.forEach((currEle)=>{
      currEle.checked = false;
    })
}
submit.addEventListener('click',()=>{
  const checkAnswer = getCheckAnswer();
  console.log(checkAnswer);

  // compare checked answer with current answer
  if(checkAnswer === quizes[questionCount].ans){
    score++;
    console.log(quizes[questionCount].ans);
  }
  // count number of questions
  questionCount++;
  
  deselectAll();

  if(questionCount<quizes.length){
    loadFunc();
  }else{
    finalScore.innerHTML = `<h2 class="your_score">Your Score is ${score}/${quizes.length}</h2>
    <div class="btn_sec_main">
        <button type="button" class="play_btn" onclick="location.reload()">PLAY AGAIN</button>
    </div>`
  finalScore.classList.remove('mainFinal');
  }


})

