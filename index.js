// const calculateBtn = document.getElementById("calculateBtn");
// const resetBtn = document.getElementById("resetBtn");

// const name1Input = document.getElementById("name1");
// const name2Input = document.getElementById("name2");

// const result = document.getElementById("result");
// const resultTitle = document.getElementById("resultTitle");
// const resultDescription = document.getElementById("resultDescription");
// const error = document.getElementById("error");

// const flamesData = {
// F: {
// title: "Friends 🤝",
// description: "You both have a beautiful friendship connection. Keep supporting and caring for each other! 💕"
// },

// L: {
//     title: "Love ❤️",
//     description: "There is a strong romantic connection between you two. Your hearts may be closer than you think! 💖"
// },

// A: {
//     title: "Affection 💕",
//     description: "There is a sweet bond and genuine affection between you. Something special is growing! 🌹"
// },

// M: {
//     title: "Marriage 💍",
//     description: "Wow! FLAMES predicts a strong relationship connection. Maybe there is a future together! 💍❤️"
// },

// E: {
//     title: "Enemies 😈",
//     description: "You two may have some differences. But sometimes opposites create interesting relationships! 😜"
// },

// S: {
//     title: "Siblings 👨‍👩‍👧‍👦",
//     description: "Your connection feels more like a strong family bond. Always be there for each other! 💗"
// }


// };

// calculateBtn.addEventListener("click", calculateFlames);

// name1Input.addEventListener("keypress", function(event) {
// if (event.key === "Enter") {
// calculateFlames();
// }
// });

// name2Input.addEventListener("keypress", function(event) {
// if (event.key === "Enter") {
// calculateFlames();
// }
// });

// function calculateFlames() {

// error.textContent = "";

// let name1 = name1Input.value
//     .toLowerCase()
//     .replace(/[^a-z]/g, "");

// let name2 = name2Input.value
//     .toLowerCase()
//     .replace(/[^a-z]/g, "");


// if (name1 === "" || name2 === "") {

//     error.textContent = "Please enter both names ❤️";

//     result.classList.add("hidden");

//     return;
// }


// let arr1 = name1.split("");
// let arr2 = name2.split("");


// for (let i = 0; i < arr1.length; i++) {

//     for (let j = 0; j < arr2.length; j++) {

//         if (arr1[i] === arr2[j]) {

//             arr1[i] = "";
//             arr2[j] = "";

//             break;
//         }
//     }
// }


// let count = 0;

// for (let i = 0; i < arr1.length; i++) {

//     if (arr1[i] !== "") {
//         count++;
//     }
// }

// for (let i = 0; i < arr2.length; i++) {

//     if (arr2[i] !== "") {
//         count++;
//     }
// }


// let flames = ["F", "L", "A", "M", "E", "S"];

// let index = 0;


// while (flames.length > 1) {

//     index = (index + count - 1) % flames.length;

//     flames.splice(index, 1);
// }


// const finalLetter = flames[0];

// const data = flamesData[finalLetter];


// resultTitle.textContent = data.title;

// resultDescription.textContent = data.description;

// result.classList.remove("hidden");


// highlightFlames(finalLetter);


// setTimeout(() => {

//     result.scrollIntoView({
//         behavior: "smooth",
//         block: "center"
//     });

// }, 100);


// }

// function highlightFlames(letter) {

// const letters = ["F", "L", "A", "M", "E", "S"];

// for (let i = 0; i < letters.length; i++) {

//     const element = document.getElementById(letters[i]);

//     element.classList.remove("active");

//     if (letters[i] === letter) {

//         setTimeout(() => {
//             element.classList.add("active");
//         }, 300);
//     }
// }


// }

// resetBtn.addEventListener("click", function() {

// name1Input.value = "";
// name2Input.value = "";

// error.textContent = "";

// result.classList.add("hidden");

// const letters = ["F", "L", "A", "M", "E", "S"];

// for (let i = 0; i < letters.length; i++) {

//     document
//         .getElementById(letters[i])
//         .classList.remove("active");
// }

// name1Input.focus();


// });


/* ==========================================
FLAMES LOVE CALCULATOR
========================================== */

const calculateBtn =
document.getElementById("calculateBtn");

const resetBtn =
document.getElementById("resetBtn");

const name1Input =
document.getElementById("name1");

const name2Input =
document.getElementById("name2");

const result =
document.getElementById("result");

const resultTitle =
document.getElementById("resultTitle");

const resultDescription =
document.getElementById("resultDescription");

const error =
document.getElementById("error");

const particles =
document.getElementById("particles");

/*
NEW:
Get the remaining count element
*/
const remainingCount =
document.getElementById("remainingCount");

/* ==========================================
FLAMES DATA
========================================== */

const flamesData = {

F: {
    title: "Friends 🤝",
    description:
        "A beautiful friendship connects you both. Your bond is filled with trust, laughter and unforgettable moments. 💕"
},

L: {
    title: "Love ❤️",
    description:
        "The stars are shining for you! There is a beautiful romantic connection between your hearts. Keep the love alive! 💖"
},

A: {
    title: "Affection 💕",
    description:
        "There is a sweet emotional connection between you. Your care and affection for each other could grow into something beautiful. 🌹"
},

M: {
    title: "Marriage 💍",
    description:
        "WOW! 💥 FLAMES has something special to say! Your connection has a strong destiny vibe. Maybe forever is waiting for you! 💍❤️"
},

E: {
    title: "Enemies 😈",
    description:
        "You two might have some fiery differences! 🔥 But sometimes a little chaos makes a relationship interesting. 😜"
},

S: {
    title: "Siblings 👨‍👩‍👧‍👦",
    description:
        "Your bond feels like family. You can always count on each other through the good times and bad. 💗"
}


};

/* ==========================================
CALCULATE BUTTON
========================================== */

calculateBtn.addEventListener(
"click",
calculateFlames
);

/* ==========================================
ENTER KEY
========================================== */

name1Input.addEventListener(
"keydown",
function(event) {

    if (event.key === "Enter") {
        calculateFlames();
    }

}


);

name2Input.addEventListener(
"keydown",
function(event) {

    if (event.key === "Enter") {
        calculateFlames();
    }

}


);

/* ==========================================
MAIN FLAMES FUNCTION
========================================== */

function calculateFlames() {

error.textContent = "";

let name1 =
    name1Input.value
        .toLowerCase()
        .replace(/[^a-z]/g, "");

let name2 =
    name2Input.value
        .toLowerCase()
        .replace(/[^a-z]/g, "");


/* Validation */

if (name1 === "" || name2 === "") {

    error.textContent =
        "💗 Please enter both names to reveal your destiny!";

    result.classList.add("hidden");

    remainingCount.textContent = "0";

    return;
}


/* ======================================
   CONVERT NAMES INTO ARRAYS
====================================== */

let arr1 = name1.split("");
let arr2 = name2.split("");


/* ======================================
   REMOVE COMMON LETTERS

   Nested FOR loops
====================================== */

for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

        if (
            arr1[i] !== "" &&
            arr2[j] !== "" &&
            arr1[i] === arr2[j]
        ) {

            arr1[i] = "";
            arr2[j] = "";

            break;
        }

    }

}


/* ======================================
   COUNT REMAINING LETTERS
====================================== */

let count = 0;


/*
    Count remaining letters
    from first name
*/

for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== "") {
        count++;
    }

}


/*
    Count remaining letters
    from second name
*/

for (let i = 0; i < arr2.length; i++) {

    if (arr2[i] !== "") {
        count++;
    }

}


/* ======================================
   SHOW DYNAMIC COUNT IN UI
====================================== */

remainingCount.textContent = count;


/* ======================================
   FLAMES ARRAY
====================================== */

let flames =
    ["F", "L", "A", "M", "E", "S"];

let index = 0;


/*
    If count becomes 0,
    use 1 for the FLAMES calculation.
*/

let flamesCount = count;

if (flamesCount === 0) {
    flamesCount = 1;
}


/* ======================================
   FLAMES ELIMINATION
====================================== */

while (flames.length > 1) {

    index =
        (index + flamesCount - 1)
        % flames.length;

    flames.splice(index, 1);

}


/* ======================================
   FINAL RESULT
====================================== */

const finalLetter =
    flames[0];

const data =
    flamesData[finalLetter];


/* ======================================
   SHOW RESULT
====================================== */

resultTitle.textContent =
    data.title;

resultDescription.textContent =
    data.description;

result.classList.remove("hidden");


/* Highlight FLAMES result */

highlightResult(finalLetter);


/* POP BLAST */

createBlast();


/* HEART EXPLOSION */

createHeartExplosion();


/* Scroll to result */

setTimeout(function() {

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}, 200);


}

/* ==========================================
HIGHLIGHT RESULT
========================================== */

function highlightResult(letter) {

const letters =
    ["F", "L", "A", "M", "E", "S"];


for (let i = 0; i < letters.length; i++) {

    const element =
        document.getElementById(
            letters[i]
        );

    element.classList.remove(
        "active"
    );

}


setTimeout(function() {

    const activeElement =
        document.getElementById(letter);

    activeElement.classList.add(
        "active"
    );

}, 500);


}

/* ==========================================
POP BLAST PARTICLES
========================================== */

function createBlast() {

particles.innerHTML = "";

const particleCount = 80;


for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add(
        "particle"
    );


    const angle =
        Math.random() *
        Math.PI * 2;


    const distance =
        150 +
        Math.random() * 350;


    const x =
        Math.cos(angle) *
        distance;

    const y =
        Math.sin(angle) *
        distance;


    particle.style.setProperty(
        "--x",
        `${x}px`
    );

    particle.style.setProperty(
        "--y",
        `${y}px`
    );


    const colors = [

        "#ff2d75",
        "#ff75ad",
        "#ffb3d1",
        "#ffffff",
        "#b026ff",
        "#ffd700"

    ];


    particle.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    const size =
        4 +
        Math.random() * 10;


    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;


    particle.style.left =
        "50%";

    particle.style.top =
        "50%";


    particles.appendChild(
        particle
    );


    setTimeout(function() {

        particle.remove();

    }, 1300);

}


}

/* ==========================================
HEART EXPLOSION
========================================== */

function createHeartExplosion() {

const hearts = [

    "❤️",
    "💖",
    "💕",
    "💗",
    "💘",
    "💓",
    "💞"

];


for (let i = 0; i < 20; i++) {

    const heart =
        document.createElement("div");


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.position =
        "fixed";

    heart.style.left =
        "50%";

    heart.style.top =
        "50%";

    heart.style.zIndex =
        "20";

    heart.style.pointerEvents =
        "none";

    heart.style.fontSize =
        `${15 + Math.random() * 25}px`;


    const angle =
        Math.random() *
        Math.PI * 2;


    const distance =
        150 +
        Math.random() * 300;


    const x =
        Math.cos(angle) *
        distance;

    const y =
        Math.sin(angle) *
        distance;


    heart.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(0)",

                opacity: 1
            },

            {
                transform:
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )
                    scale(1.3)
                    rotate(360deg)`,

                opacity: 0
            }
        ],

        {
            duration:
                900 +
                Math.random() * 800,

            easing:
                "cubic-bezier(.17,.67,.3,1.3)"
        }

    );


    document.body.appendChild(
        heart
    );


    setTimeout(function() {

        heart.remove();

    }, 1800);

}


}

/* ==========================================
RESET
========================================== */

resetBtn.addEventListener(
"click",
function() {

    name1Input.value = "";

    name2Input.value = "";

    error.textContent = "";

    result.classList.add(
        "hidden"
    );


    /*
        Reset dynamic count
    */

    remainingCount.textContent =
        "0";


    const letters =
        ["F", "L", "A", "M", "E", "S"];


    for (let i = 0; i < letters.length; i++) {

        document
            .getElementById(
                letters[i]
            )
            .classList.remove(
                "active"
            );

    }


    name1Input.focus();

}


);