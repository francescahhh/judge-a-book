const bookOneAPI = "https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles?isbn=9780385545136&api_key=vceusdunnm648vqnxcqk728m"

//book 1 fetch request
fetch(bookOneAPI)
.then(response => response.json())
.then(data => console.log(data))

//book 1 like button
const buttonOne = document.getElementById('likeButtonFirstBook')

buttonOne.addEventListener('click', () => {
    buttonOne.classList.toggle('liked')
})

//book 2 like button
const buttonTwo = document.getElementById('likeButtonSecondBook')

buttonTwo.addEventListener('click', () => {
    buttonTwo.classList.toggle('liked')
})

//book 3 like button
const buttonThree = document.getElementById('likeButtonThirdBook')

buttonThree.addEventListener('click', () => {
    buttonThree.classList.toggle('liked')
})

//book 4 like button
const buttonFour = document.getElementById('likeButtonFourthBook')

buttonFour.addEventListener('click', () => {
    buttonFour.classList.toggle('liked')
})

//book 5 like button
const buttonFive = document.getElementById('likeButtonFifthBook')

buttonFive.addEventListener('click', () => {
    buttonFive.classList.toggle('liked')
})

//book 6 like button
const buttonSix = document.getElementById('likeButtonSixthBook')

buttonSix.addEventListener('click', () => {
    buttonSix.classList.toggle('liked')
})



//book 1 guess
document.addEventListener("DOMContentLoaded", () => {
    const guessForm = document.getElementById('createGuessForm');
    guessForm.addEventListener('submit', handleSubmit);
  });
  
  function handleSubmit(event) {
    event.preventDefault();
  
    //setting up the guess list
    const guessList = document.getElementById('guesses');
    const guess = document.createElement('li');
    guess.textContent = (event.target.description.value);
    guessList.append(guess); 
  
    //creating delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      guessList.removeChild(guess);
  });
    guess.append(deleteButton);
    //to clear out the text box after submitted
    event.target.reset(); }


//book 2 guess
    document.addEventListener("DOMContentLoaded", () => {
        const guessForm2 = document.getElementById('createGuessForm2');
        guessForm2.addEventListener('submit', handleSubmit2);
      });
      
      function handleSubmit2(event) {
        event.preventDefault();
      
        //setting up the guess list
        const guessList2 = document.getElementById('guesses2');
        const guess2 = document.createElement('li');
        guess2.textContent = (event.target.description2.value);
        guessList2.append(guess2);
      
        //creating delete button
        const deleteButton2 = document.createElement('button');
        deleteButton2.textContent = 'X';
        deleteButton2.addEventListener('click', () => {
          guessList2.removeChild(guess2);
      });
        guess2.append(deleteButton2);
      
        //to clear out the text box after submitted
        event.target.reset(); }
  
//book 3 guess
    document.addEventListener("DOMContentLoaded", () => {
        const guessForm3 = document.getElementById('createGuessForm3');
        guessForm3.addEventListener('submit', handleSubmit3);
      });
      
      function handleSubmit3(event) {
        event.preventDefault();
      
        //setting up the guess list
        const guessList3 = document.getElementById('guesses3');
        const guess3 = document.createElement('li');
        guess3.textContent = (event.target.description3.value);
        guessList3.append(guess3);
      
        //creating delete button
        const deleteButton3 = document.createElement('button');
        deleteButton3.textContent = 'X';
        deleteButton3.addEventListener('click', () => {
          guessList3.removeChild(guess3);
      });
        guess3.append(deleteButton3);
      
        //to clear out the text box after submitted
        event.target.reset(); }

//book 4 guess
    document.addEventListener("DOMContentLoaded", () => {
        const guessForm4 = document.getElementById('createGuessForm4');
        guessForm4.addEventListener('submit', handleSubmit4);
      });
      
      function handleSubmit4(event) {
        event.preventDefault();
      
        //setting up the guess list
        const guessList4 = document.getElementById('guesses4');
        const guess4 = document.createElement('li');
        guess4.textContent = (event.target.description4.value);
        guessList4.append(guess4);
      
        //creating delete button
        const deleteButton4 = document.createElement('button');
        deleteButton4.textContent = 'X';
        deleteButton4.addEventListener('click', () => {
          guessList4.removeChild(guess4);
      });
        guess4.append(deleteButton4);
      
        //to clear out the text box after submitted
        event.target.reset(); }

//book 5 guess
    document.addEventListener("DOMContentLoaded", () => {
        const guessForm5 = document.getElementById('createGuessForm5');
        guessForm5.addEventListener('submit', handleSubmit5);
      });
      
      function handleSubmit5(event) {
        event.preventDefault();
      
        //setting up the guess list
        const guessList5 = document.getElementById('guesses5');
        const guess5 = document.createElement('li');
        guess5.textContent = (event.target.description5.value);
        guessList5.append(guess5);
      
        //creating delete button
        const deleteButton5 = document.createElement('button');
        deleteButton5.textContent = 'X';
        deleteButton5.addEventListener('click', () => {
          guessList5.removeChild(guess5);
      });

        guess5.append(deleteButton5);
      
        //to clear out the text box after submitted
        event.target.reset(); }

//book 6 guess
    document.addEventListener("DOMContentLoaded", () => {
        const guessForm6 = document.getElementById('createGuessForm6');
        guessForm6.addEventListener('submit', handleSubmit6);
      });
      
      function handleSubmit6(event) {
        event.preventDefault();
      
        //setting up the guess list
        const guessList6 = document.getElementById('guesses6');
        const guess6 = document.createElement('li');
        guess6.textContent = (event.target.description6.value);
        guessList6.append(guess6);
      
        //creating delete button
        const deleteButton6 = document.createElement('button');
        deleteButton6.textContent = 'X';
        deleteButton6.addEventListener('click', () => {
          guessList6.removeChild(guess6);
      });

        guess6.append(deleteButton6);
      
        //to clear out the text box after submitted
        event.target.reset(); }