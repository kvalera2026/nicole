(function(){
    function buildQuiz(){
      const output = [];
  
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
  
      let numCorrect = 0;
  
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'darkgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz2');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [

      {
        question: "It models the probability of x occurences in a given time interval of space.",
        answers: {
          a: "Discrete",
          b: "Binomial",
          c: "Poisson"
        },
        correctAnswer: "c"
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();