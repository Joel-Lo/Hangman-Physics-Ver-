const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const maxGuesses = 6;
const burgerMenu = document.getElementById("burgerMenu");
const infoBox = document.getElementById("infoBox");
const closeInfoBtn = document.getElementById("closeInfo");
const bgLayer = document.createElement("div");
let currentWord, correctLetters, wrongGuessCount, currentHint, currentType;
let recentWords = [];

bgLayer.className = "dynamic-bg";
document.body.appendChild(bgLayer);
bgLayer.style.opacity = "0.3"; 

document.addEventListener("click", function(event) {
    const burger = event.target.closest("#burgerMenu") || event.target.closest(".burger-menu");
    
    if (burger) {
        console.log("Burger menu clicked!"); 
        burger.classList.toggle("active");
        const dropdown = document.querySelector(".info");
        if (dropdown) {
            dropdown.classList.toggle("show");
            console.log("Dropdown state toggled!");
        } else {
            console.error("Error: Could not find any element with the class '.info' on this page.");
        }
    }
});

const allowedKeys = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "×", "(", ")", "_", "+"],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "{", "]"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":", ".", "}", "|"],
    ["Z", "X", "C", "V", "B", "N", "M", "<", ">", "÷", ";", "?", ","]
];

keyboardDiv.innerHTML = "";

allowedKeys.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");

    row.forEach(char => {
        const button = document.createElement("button");
        button.innerText = char;
        rowDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, char));
    });

    keyboardDiv.appendChild(rowDiv);
});

document.addEventListener("keydown", (e) => {
    if (gameModal.classList.contains("show") || e.ctrlKey || e.altKey || e.metaKey) return;

    let pressedKey = e.key;

    if (pressedKey === "/") {
        pressedKey = "÷";
    }

    if (pressedKey === "*") {
        pressedKey = "×";
    }

    const buttons = Array.from(keyboardDiv.querySelectorAll("button"));
    const matchingButton = buttons.find(
        btn => btn.innerText.toLowerCase() === pressedKey.toLowerCase()
    );

    if (matchingButton && !matchingButton.disabled) {
        initGame(matchingButton, pressedKey);
    }
});

Swal.fire({
    title: 'Test Your Knowledge!',
    html: 'Challenge your Physics knowledge with Hangman!',
    showConfirmButton: false,
    showCancelButton: false,
    allowOutsideClick: false,
    timer: 3000,
    backdrop: `#5E63BAe6`,
    color: `#F6DEFF`,
    background: `#A800A4`
}).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
        getRandomWord();
    }
});

const initGame = (button, clickedLetter) => {
    const char = clickedLetter.toLowerCase();
    const lowerCaseWord = currentWord.toLowerCase();

    button.disabled = true;

    if (lowerCaseWord.includes(char)) {
        if (!correctLetters.includes(char)) {
            correctLetters.push(char);
        }

        let letterIndex = 0;
        [...lowerCaseWord].forEach((letter, index) => {
            if (letter !== ' ') {
                if (letter === char) {
                    wordDisplay.querySelectorAll("li")[letterIndex].innerText = currentWord[index];
                    wordDisplay.querySelectorAll("li")[letterIndex].classList.add("guessed");
                }
                letterIndex++;
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `hangman-${wrongGuessCount}.svg`;
    }

    guessesText.innerText = `${wrongGuessCount} /${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);

    const uniqueLettersInWord = new Set(lowerCaseWord.replace(/ /g, "")).size;

    if (correctLetters.length === uniqueLettersInWord) return gameOver(true);
};

const getRandomWord = () => {
    let randomIndex;
    let chosenWord;
    let attempts = 0;
    
    do {
        randomIndex = Math.floor(Math.random() * wordList.length);
        chosenWord = wordList[randomIndex];
        attempts++;
    } while (recentWords.includes(chosenWord.word) && attempts < 10 && wordList.length > 2);
    
    recentWords.push(chosenWord.word);
    
    if (recentWords.length > 214) {
        recentWords.shift(); 
    }

    const { word, hint, type } = chosenWord;
    currentWord = word;
    currentHint = hint; 
    currentType = type || "term";    
    document.querySelector(".hint-text b").innerText = hint;

    const capitalizedType = currentType.charAt(0).toUpperCase() + currentType.slice(1);
    document.querySelector(".concept-text b").innerText = capitalizedType;
    resetGame();
};


const gameOver = (isVictory) => {
    const lowerType = currentType.charAt(0).toLowerCase() + currentType.slice(1);
    const lowerFirstHint = currentHint.charAt(0).toLowerCase() + currentHint.slice(1);
    const lowerWord = currentWord.charAt(0).toLowerCase() + currentWord.slice(1);
    
    // Customised
    if (lowerType === "term" && lowerWord === "kinetic particle model of matter") {
        const modalText = isVictory ? `The ${lowerWord} is` : `The ${lowerWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "term" && lowerWord === "neutral objects" | lowerWord === "negatively charged objects" | lowerWord === "positively charged objects" | lowerWord === "parallel circuit") {
        const modalText = isVictory ? `${currentWord} is when the` : `${currentWord} is when the`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "term" && lowerWord === "series circuit") {
        const modalText = isVictory ? `${currentWord} is when` : `${currentWord} is when`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "term" && currentWord === "Geiger-Muller counter") {
        const modalText = isVictory ? `${currentWord} is` : `${currentWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "term" && lowerWord === "thermal equilibrium" | lowerWord === "electric charge" | lowerWord === "induced magnetism" | lowerWord === "temporary magnet" | lowerWord === "permanent magnet") {
        const modalText = isVictory ? `${currentWord}` : `${currentWord}`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition" && lowerFirstHint === "solid" | lowerFirstHint === "liquid" | lowerFirstHint === "gas" | lowerFirstHint === "temperature" | lowerFirstHint === "earthed metal casing" | lowerFirstHint === "double insulation" | lowerFirstHint === "alpha particles") {
        const modalText = isVictory ? `${currentHint}` : `${currentHint}`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition" && lowerFirstHint === "earth wire" | lowerFirstHint === "neutral wire" | lowerFirstHint === "live wire" | lowerFirstHint === "fuse" | lowerFirstHint === "circuit breaker" | lowerFirstHint === "soft magnetic material" | lowerFirstHint === "hard magnetic material") {
        const modalText = isVictory ? `${currentHint} is` : `${currentHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition" && lowerFirstHint === "isotopes" | lowerFirstHint === "beta particles") {
        const modalText = isVictory ? `${currentHint} are` : `${currentHint} are`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition" && lowerFirstHint === "gamma ray") {
        const modalText = isVictory ? `${currentHint} is the` : `${currentHint} is the`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition" && lowerFirstHint === "first law of reflection" | lowerFirstHint === "second law of reflection" | lowerFirstHint === "first law of refraction" | lowerFirstHint === "second law of refraction") {
        const modalText = isVictory ? `The ${lowerFirstHint} states that` : `The ${lowerFirstHint} states that`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (currentType === "EM Frequency" && currentWord === "X-ray") {
        const modalText = isVictory ? `The frequency of ${currentWord} is` : `The frequency of ${currentWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (currentType === "EM Wavelength" && currentWord === "X-ray") {
        const modalText = isVictory ? `The wavelength of ${currentWord} is` : `The wavelength of ${currentWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "value" && currentHint === "Charge of proton and electron") {
        const modalText = isVictory ? `The ${lowerFirstHint} is` : `The ${lowerFirstHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} 1.6×10⁻¹⁹ C</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "value" && currentHint === "Acceleration of free fall") {
        const modalText = isVictory ? `The ${lowerFirstHint} is` : `The ${lowerFirstHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} 10 m/s²</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "value" && currentHint === "Speed of EM wave in a vacuum") {
        const modalText = isVictory ? `The ${lowerFirstHint} is` : `The ${lowerFirstHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} 3×10⁸ m/s</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "formula" && currentWord === "Work done" | currentWord === "Power") {
        const modalText = isVictory ? `${currentWord} =` : `${currentWord} =`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "formula" && currentHint === "Moment of a force about a pivot") {
        const modalText = isVictory ? `${currentHint} =` : `${currentHint} =`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} Force × Perpendicular distance from pivot to line of action of the force</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "formula" && currentHint === "Energy in kinetic store") {
        const modalText = isVictory ? `${currentHint} =` : `${currentHint} =`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ½ × Mass × Speed²</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "formula" && currentWord === "Potential difference in series circuit" | currentWord === "Potential difference in parallel circuit") {
        const modalText = isVictory ? `${currentWord} =` : `${currentWord} =`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }

    // Default
    else if (lowerType === "term") {
        const modalText = isVictory ? `${currentWord} is the` : `${currentWord} is the`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerFirstHint}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "definition") {
        const modalText = isVictory ? `${currentHint} is the` : `${currentHint} is the`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerWord}.</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "formula") {
        const modalText = isVictory ? `${currentHint} =` : `${currentHint} =`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentWord}</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "prefix") {
        const modalText = isVictory ? `The ${lowerType} of ${lowerFirstHint} is` : `The ${lowerType} of ${lowerFirstHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentWord}</b>`;
        gameModal.classList.add("show");
    }
    else if (currentType === "EM Frequency") {
        const modalText = isVictory ? `The frequency of ${lowerWord} is` : `The frequency of ${lowerWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (currentType === "EM Wavelength") {
        const modalText = isVictory ? `The wavelength of ${lowerWord} is` : `The wavelength of ${lowerWord} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (currentType === "Unit Conversion") {
        const modalText = isVictory ? `${currentWord}` : `${currentWord}`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${currentHint}</b>`;
        gameModal.classList.add("show");
    }
    else if (lowerType === "value") {
        const lowerWordFormula = currentWord;
        const modalText = isVictory ? `The ${lowerFirstHint} is` : `The ${lowerFirstHint} is`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Well Done!' : 'Try Again!';
        gameModal.querySelector("p").innerHTML = `<b>${modalText} ${lowerWordFormula}</b>`;
        gameModal.classList.add("show");
    }
};

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} /${maxGuesses}`;

    const lowerCaseWord = currentWord.toLowerCase();

    wordDisplay.innerHTML = lowerCaseWord.split("").map(letter => {
        if (letter === ' ') {
            return `<span class="space-separator">${letter}</span>`;
        }
        return `<li class="letter"></li>`;
    }).join("");

    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
};

playAgainBtn.addEventListener("click", getRandomWord);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && gameModal.classList.contains("show")) {
        e.preventDefault();
        getRandomWord();
    }
});
