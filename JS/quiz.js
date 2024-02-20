let questions = [
    {"id": 1,
    "question": "What colour were the pills Neo had to choose from in The Matrix?",
    "a": "Red & Blue",
    "b": "Red & Black",
    "c": "White & Black",
    "d": "Green & Yellow",
    "answer": "a"
},
{"id": 2,
    "question": "Who played Whitney Houston's bodyguard in The Bodyguard?",
    "a": "Bill Cobbs",
    "b": "Ralph Waite",
    "c": "Kevin Costner",
    "d": "Michael Keaton",
    "answer": "c"
},
{"id": 3,
    "question": "Which actor plays the main male hero in The Pacifier?",
    "a": "Leonardo DiCaprio",
    "b": "Christian Bale",
    "c": "Paul Walker",
    "d": "Vin Diesel",
    "answer": "d"
},
{"id": 4,
    "question": "What item is hidden in every scene of Fight Club?",
    "a": "Gold Pen",
    "b": "A Starbucks cup",
    "c": "Coin",
    "d": "Donald Duck",
    "answer": "b"
},
{"id": 5,
    "question": "Jim Carrey portrayed which Batman villain?",
    "a": "Scarecrow",
    "b": "Bane",
    "c": "Riddler",
    "d": "Joker",
    "answer": "c"
},
{"id": 6,
    "question": "Who played Mr Chow in The Hangover?",
    "a": "Ken Jeong",
    "b": "Fan Wei",
    "c": "Rowan Atkinson",
    "d": "Eddie Murphy",
    "answer": "a"
},
{"id": 7,
    "question": "Which Disney film contains the song ‘I Just Can’t Wait to be King’?",
    "a": "Aladdin",
    "b": "Beauty and the Beast",
    "c": "The jungle book",
    "d": "The Lion King",
    "answer": "d"
},
{"id": 8,
    "question": "Ryan Reynolds starred alongside Melissa George in which 2005 spine chiller?",
    "a": "The Amityville Horror",
    "b": "School of Life",
    "c": "Just Friends",
    "d": "Waiting",
    "answer": "a"
},
{"id": 9,
    "question": "Who played the Green Goblin in the 2002 box-office smash Spider-Man?",
    "a": "Alfred Molina",
    "b": "Willem Dafoe",
    "c": "Thomas Haden Church",
    "d": "Jamie Foxx",
    "answer": "b"
},
{"id": 10,
    "question": "Who is the only person ever to receive an Oscar nomination for acting in a Star Wars movie?",
    "a": "Alec Guinness",
    "b": "Harrison Ford",
    "c": "Alec Guinness",
    "d": "David Prowse",
    "answer": "a"
},
{"id": 11,
    "question": "What is the name of the actress who plays Abigail in The Favourite?",
    "a": "Emma Stone",
    "b": "Margot Robbie",
    "c": "Gal Gadot",
    "d": "Scarlett Johansson",
    "answer": "a"
},
{"id": 12,
    "question": "In which country was The Lord of the Rings primarily filmed?",
    "a": "Australia",
    "b": "England",
    "c": "Canada",
    "d": "New Zealand",
    "answer": "d"
},
{"id": 13,
    "question": "In Black Panther, Wakanda is so technologically advanced because of which type of metal?",
    "a": "Silver",
    "b": "Gold",
    "c": "Vibranium",
    "d": "Titanium",
    "answer": "c"
},
{"id": 14,
    "question": "How to Train Your Dragon: What is this fearsome warrior's name?",
    "a": "Bloodaxe",
    "b": "Skullthunder",
    "c": "Stromking",
    "d": "Hiccup",
    "answer": "d"
},
{"id": 15,
    "question": "How many Jumanji films have been made so far?",
    "a": "1",
    "b": "4",
    "c": "7",
    "d": "3",
    "answer": "d"
},
{"id": 16,
    "question": "Who is the Director of Interstellar?",
    "a": "Christopher Nolan",
    "b": "Steven Spielberg",
    "c": "James Cameron",
    "d": "Ridley Scott",
    "answer": "a"
},
{"id": 17,
    "question": "In Inception, how many dream levels does the crew enter?",
    "a": "Five",
    "b": "Two",
    "c": "Four",
    "d": "Three",
    "answer": "a"
},
{"id": 18,
    "question": "What was the first James Bond movie ever made?",
    "a": "Dr.No",
    "b": "Goldfinger",
    "c": "You Only Live Twice",
    "d": "No Time to Die",
    "answer": "a"
},
{"id": 19,
    "question": "What was in the box in Se7en?",
    "a": "Bomb",
    "b": "Letter",
    "c": "Dead Bird",
    "d": "Mills's wife's head",
    "answer": "d"
},
{"id": 20,
    "question": "Who played Bruce Wayne in The Batman (2022)?",
    "a": "Robert Pattinson",
    "b": "Bale Christian",
    "c": "Michael Keaton",
    "d": "Ben Affleck",
    "answer": "a"
},

];

const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");
const restart = document.getElementById("restart");


let questionCounter;
let score;
const MAX_QUESTIONS = 5;

let acceptingAnswers;
let timeInterval;

function resetTimer(){
    clearInterval(timeInterval);
    timeSecond = 30;
    displayTime(timeSecond);
}

restart.addEventListener("click", ()=>{
    resetTimer();
    startGame();
});

startGame = () => {
    questionCounter = 0;
    score = 0;
    acceptingAnswers = true;
    scoreText.innerText = score;

    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
    getNewQuestion();
};

const getRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n> len){
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());


    return (selected = shuffled.slice(0, n));
};

const getNewQuestion = () => {
    if(availableQuestions.length === 0){
        displayResults();
        return;
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    currentQuestion = availableQuestions[0];
    question.innerText = currentQuestion.question;


    answers.forEach((answer) => {
        answer.innerText = currentQuestion[answer.dataset["answer"]];
    });

    

    answers.forEach((answer) => {
        answer.addEventListener("click",(e) =>{

            if(!acceptingAnswers){
                return;
            }
            acceptingAnswers = false;

            const clickedAnswer = e.target;

            const answeredLetter = clickedAnswer.dataset["answer"];
            let classToApply = "incorrect";
            if (answeredLetter === currentQuestion.answer){
                score += 2;
                scoreText.innerText = score;
                classToApply = "correct";

            } else {
                score -= 1;
                scoreText.innerText = score;
            }

            clickedAnswer.parentElement.classList.add(classToApply);

            setTimeout(() => {
                clickedAnswer.parentElement.classList.remove(classToApply);
                getNewQuestion();
                acceptingAnswers = true;
            }, 1000);
            
        });
    });
    availableQuestions.shift();
};

displayResults = () => {
    const myModalEl = document.getElementById('myModal');
    const modal = new mdb.Modal(endGameModal);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerText = `You Scored: ${score}`;
    modal.show();
    acceptingAnswers = false;
};


restart.addEventListener("click", startGame);
startGame();

let timeSecond = 30;
const timeH = document.querySelector("h1");


displayTime(timeSecond);
resetTimer();
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(timerInterval);
  }
}, 1000);


function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
}

displayResults = () => {
    const modal = new mdb.Modal(endGameModal);

    let badge;
    let message;

    if (score >= 10) {
        badge = "Gold";
        message = `Congratulations! You have earned ${score} points with a ${badge} badge. Please claim the points in your next purchase.`;
    } else if (score >= 6) {
        badge = "Silver";
        message = `Congratulations! You have earned ${score} points with a ${badge} badge. Please claim the points in your next purchase.`;
    } else {
        badge = "Bronze";
        message = `Congratulations! You have earned ${score} points with a ${badge} badge. Please claim the points in your next purchase.`;
    }

    const modalBody = document.getElementById("modal-body");
    modalBody.innerText = message;
    modal.show();
    acceptingAnswers = false;
};
