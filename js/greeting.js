// // // let a = 5;
// // // let b = 2;
// // // let myName = "Alex";

// // // console.log(a + b);
// // // console.log(a * b);
// // // console.log(a / b);

// // // myName = "Jearyong";

// // // console.log("Hello " + myName);
// // // alert("Your new name is " + myName);

// // // const amIFat = null;
// // // let sometiong

// // // console.log(sometiong, amIFat);

// // // const mon = "mon";
// // // const tue = "tue";
// // // const wed = "wed";
// // // const thu = "thu";
// // // const fri = "fri";
// // // const sat = "sat";
// // // const sun = "sun";

// // const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // // Get Ttem from Array
// // console.log(daysOfWeek[2]);

// // // Add one more day to the array
// // daysOfWeek.push("sun");

// // console.log(daysOfWeek);

// // const toBuy = ["tomato", "potato", "pizza"];

// // toBuy.push("kimbab");

// // console.log(toBuy);

// // // const player = {
// // //     name: "alex",
// // //     points: 10,
// // //     fat: false,
// // // };

// // // console.log(player);
// // // player.lastName = 'potato';
// // // player.points = player.points + 15;
// // // console.log(player);

// // function sayHello(nameOfPerson, age) {
// //     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// // };

// // sayHello("alex", 42);
// // sayHello("nico", 41);
// // sayHello("ynn", 11);

// // function plus(firstNumber, secondNumber) {
// //     console.log(firstNumber + secondNumber);
// // };

// // plus(6, 80);

// // function divide(firstNumber, secondNumber) {
// //     console.log(firstNumber / secondNumber);
// // }

// // divide(100, 5);

// // const player = {
// //     name: "alex",
// //     sayHello: function(otherPersonsName) {
// //         console.log("hell " + otherPersonsName + " nice to meet you!!");
// //     },
// // };

// // console.log(player.name);
// // player.sayHello("lynn")

// // const calculator = {
// //     add: function(a, b) {
// //         console.log(a + b);
// //     },
// //     multi: function(a, b) {
// //         console.log(a * b);
// //     },
// //     minus: function(a, b) {
// //         console.log(a - b);
// //     },
// //     divide: function(a, b) {
// //         console.log(a / b);
// //     },
// // };

// // calculator.add(1, 1);
// // calculator.multi(5, 4);
// // calculator.minus(100, 55);
// // calculator.divide(10, 5);

// // const age = parseInt(prompt("How old are you?"));

// // // console.log(isNaN(age));

// // if (isNaN(age) || age < 0) {
// //     console.log("Please write a real positive number.");
// // } else if (age < 18) {
// //     console.log("You are too young.");
// // } else if (age >= 18 && age <= 50) {
// //     console.log("You can drink");
// // } else if (age > 50 && age <= 80) {
// //     console.log("You should exercise");
// // } else if (age === 100) {
// //     console.log("You ar wise.")
// // } else if (age > 80) {
// //     console.log("You can do whatever you want.")
// // }

// // document.title = "Hello! From JS!"

// // const title = document.getElementById("title");

// // console.dir(title);

// // title.innerText = "Got you!";

// // console.log(title.id);
// // console.log(title.className);

// // const h1 = document.querySelector("div.hello:first-child h1");

// // function handleTitleClick() {
// //     h1.classList.toggle("clicked");
// // }

// // h1.addEventListener("click", handleTitleClick);



// // ????????? element ???????????? | loginForm ????????? ????????? ????????? ID??? login-form??? Element??? ????????????

// // const loginForm = document.querySelector("#login-form");
// // ?????? ????????? ??????, querySelectior??? ???????????? ????????? ?????? ????????? ID????????? ?????? ??????(#)
// // const loginForm = document.getElementById("login-form");
// // ??? ????????? ??????, getElementById??? ID?????? ????????? ?????? ????????? ID????????? ?????? ?????????
// // ?????? ?????? ????????? ?????? ??? ???????????? ???????????? ????????? ????????? ??????

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");

// // const link = document.querySelector("a")

// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASS = "hidden";
// const USERNAME_KEY = "userName";

// function onLoginSubmit(event) {
//     // console.log(loginInput.value);
//     event.preventDefault();
//     // const username = loginInput.value;
    
//     // ?????? ????????? ?????? ????????? ????????????
//     // if (username === "") {
//     //     alert("????????? ????????? ??????????????????.");
//     // } else if(username.length > 15) {
//     //     alert("Your name sis too logn.")
//     // }
//     // console.log(loginInput.value);
//     loginForm.classList.add(HIDDEN_CLASS);
//     const userName = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, userName);
//     painGreeting(userName);
// }

// // function handleLinkClick(event) {
// //     event.preventDefault();
// // }

// // loginButton.addEventListener("click", loginBtnClick);

// // loginForm.addEventListener("submit", onLoginSubmit);
// // link.addEventListener("click", handleLinkClick);

// function painGreeting(userName) {
//     greeting.innerText = `Hello ${userName}`;
//     greeting.classList.remove(HIDDEN_CLASS);
// }

// const savedUserName = localStorage.getItem(USERNAME_KEY);

// if (savedUserName === null) {
//     loginForm.classList.remove(HIDDEN_CLASS);
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     painGreeting(savedUserName);
// }

const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `Hello ${name}`;
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "Type your name here";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();
