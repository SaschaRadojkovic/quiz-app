const answer1 = document.querySelector('[data-js="showanswer1"]');
console.log("answer1", answer1);
const toastContainer = document.querySelector('[data-js="toast-container"]');
const newAnswer = document.querySelector('[data-js="answer-text"]');

answer1.addEventListener("click", () => {
  newAnswer.hidden = !newAnswer.hidden;
  if (newAnswer.hidden) {
    answer1.textContent = "Show Answer";
  } else {
    answer1.textContent = "Hide Answer";
  }
});

const button1 = document.querySelector('[data-js="bookmark1"]');
button1.addEventListener("click", () => {
  button1.classList.toggle("active");
});
const button2 = document.querySelector('[data-js="bookmark2"]');
button2.addEventListener("click", () => {
  button2.classList.toggle("active");
});
const button3 = document.querySelector('[data-js="bookmark3"]');
button3.addEventListener("click", () => {
  button3.classList.toggle("active");
});
const button4 = document.querySelector('[data-js="bookmark4"]');
button4.addEventListener("click", () => {
  button4.classList.toggle("active");
});

// get new question
