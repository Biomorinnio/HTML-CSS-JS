const data = [
    {
      id: 1,
      question: "Из чего строят гнезда совы?",
      answers: [
        { answer: "из глины", isCorrect: false },
        { answer: "из веток", isCorrect: false },
        { answer: "из травы", isCorrect: false },
        { answer: "совы не строят гнезда", isCorrect: true },
      ],
    },
    {
      id: 2,
      question: "Что или кто такое 'полудница':",
      answers: [
        { answer: "так называли обеденный перерыв", isCorrect: false },
        { answer: "русалка, которая поет в полдень", isCorrect: false },
        { answer: "дух, наказывающий тех, кто работает в полдень", isCorrect: true },
        
      ],
    },
    {
      id: 3,
      question: "Что делают с помидорами в завершении праздника Томатина в Испании?",
      answers: [
        { answer: "помидорами кидаются", isCorrect: true },
        { answer: "помидоры сажают", isCorrect: false },
        { answer: "помидорами украшают здания", isCorrect: false },
        { answer: "дарят друг другу помидоры", isCorrect: false }
      ],
    },
  ];

  const question = document.querySelector('.question');
  const answers = document.querySelector('.answers');
  const button = document.querySelector('.submit');
  const result = document.querySelector('.result');
  const container = document.querySelector('.container');
  const playAgain = document.querySelector('.playAgain')
  let correctRes = document.querySelector('.correctRes')
  let wrongRes = document.querySelector('.wrongRes')
  let scoreRes = document.querySelector('.scoreRes')
  
  let qNumber = 0, correct = 0, wrong = 0, score = 0, selectedAnswer;

  function newGame(){
    container.style.display = 'block';
    result.style.display = 'none';
    qNumber = 0;
    correct = 0; 
    wrong = 0;
    score = 0;
    showQueston(qNumber)
  }

  function showQueston(qNumber){
    
    if(qNumber == data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answers.innerHTML = data[qNumber].answers.map((item, index) => 
    `
    <div class="answer">
      <input type="radio" name="answer" id=${index} value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
    `
  ).join("");

    selectAnswer()
    }

  function selectAnswer(){
      const input = document.querySelectorAll('input')
      for(let i of input){
      i.addEventListener('click', function(){
        selectedAnswer = i.value
      })
    }
    
  }

  function submit(){
    button.addEventListener('click', function(){
      if(selectedAnswer == null){
        alert('Выбери ответ!');
        
        }
      else{
        if(selectedAnswer == 'true') correct++;
        else{
           wrong++;
          }
        qNumber++;
        showQueston(qNumber)
      }
      
    })
  }

  function showResult(){
      result.style.display = 'block';
      container.style.display = 'none';
      correctRes.textContent = `Правильных ответов: ${correct}`;
      wrongRes.textContent = `Неправильных ответов: ${wrong}`;
      scoreRes.textContent = `Счет: ${(correct-wrong)*10}`;
      playAgain.addEventListener('click', function(){
        newGame();
      })
  }
  
  showQueston(qNumber)
  submit()

