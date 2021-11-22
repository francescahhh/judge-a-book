//book 1 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9780385545136?api_key=vceusdunnm648vqnxcqk728m")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayBook(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayBook(data) {
  const book = data.data.titles[0].title;
  const bookOneTitle = document.getElementById("bookTitle");
  bookOneTitle.innerHTML = book;

  const author = data.data.titles[0].author;
  const bookOneAuthor = document.getElementById("authorName");
  bookOneAuthor.innerHTML = author;

  document.getElementById("bookCover").src = data.data.titles[0]._links[1].href;
}   

//book 2 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9780525555254?api_key=vceusdunnm648vqnxcqk728m")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data2 => {
  console.log(data2);
  displayBookTwo(data2)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayBookTwo(data2) {
const bookTwo = data2.data.titles[0].title
const bookTwoTitle = document.getElementById("bookTitle2");
bookTwoTitle.innerHTML = bookTwo;

const authorTwo = data2.data.titles[0].author
const bookTwoAuthor = document.getElementById("authorName2");
bookTwoAuthor.innerHTML = authorTwo;

document.getElementById("bookCover2").src = data2.data.titles[0]._links[1].href
}

//book 3 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9781635421743?api_key=vceusdunnm648vqnxcqk728m")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data3 => {
  console.log(data3);
  displayBookThree(data3)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayBookThree(data3) {
const bookThree = data3.data.titles[0].title
const bookThreeTitle = document.getElementById("bookTitle3");
bookThreeTitle.innerHTML = bookThree;

const authorThree = data3.data.titles[0].author
const bookThreeAuthor = document.getElementById("authorName3");
bookThreeAuthor.innerHTML = authorThree;

document.getElementById("bookCover3").src = data3.data.titles[0]._links[1].href
}

//book 4 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9781662600593?api_key=vceusdunnm648vqnxcqk728m")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data4 => {
  console.log(data4);
  displayBookFour(data4)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayBookFour(data4) {
const bookFour = data4.data.titles[0].title
const bookFourTitle = document.getElementById("bookTitle4");
bookFourTitle.innerHTML = bookFour;

const authorFour = data4.data.titles[0].author
const bookFourAuthor = document.getElementById("authorName4");
bookFourAuthor.innerHTML = authorFour;

document.getElementById("bookCover4").src = data4.data.titles[0]._links[1].href
}

//book 5 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9781643858753?api_key=vceusdunnm648vqnxcqk728m")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data5 => {
  console.log(data5);
  displayBookFive(data5)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayBookFive(data5) {
const bookFive = data5.data.titles[0].title
const bookFiveTitle = document.getElementById("bookTitle5");
bookFiveTitle.innerHTML = bookFive;

const authorFive = data5.data.titles[0].author;
const bookFiveAuthor = document.getElementById("authorName5");
bookFiveAuthor.innerHTML = authorFive;

document.getElementById("bookCover5").src = data5.data.titles[0]._links[1].href
}

//book 6 data
fetch("https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/9780756416751?api_key=vceusdunnm648vqnxcqk728m")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data6 => {
  console.log(data6);
  displayBookSix(data6)
})
.catch((error) => console.error("FETCH ERROR:", error));

function displayBookSix(data6) {
const bookSix = data6.data.titles[0].title
const bookSixTitle = document.getElementById("bookTitle6");
bookSixTitle.innerHTML = bookSix;

const authorSix = data6.data.titles[0].author;
const bookSixAuthor = document.getElementById("authorName6");
bookSixAuthor.innerHTML = authorSix;

document.getElementById("bookCover6").src = data6.data.titles[0]._links[1].href
}

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