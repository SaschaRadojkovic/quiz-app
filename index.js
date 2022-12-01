// const button1 = document.querySelector('[data-js="bookmark1"]');
// button1.addEventListener("click", () => {
//   console.log("test");
//   button1.classList.remove("bookmark");
//   button1.classList.toggle("active");

//   console.log("test");
// });
const answer1 = document.querySelector('[data-js="showanswer1"]');
const toastContainer = document.querySelector('[data-js="toast-container"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answer1.addEventListener("click", () => {
  const newAnswer = document.createElement("li");
  newAnswer.classList.add("answer-test");
  newAnswer.textContent = "hier deine Antwort";
  toastContainer.append(newAnswer);
});

// answer1.addEventListener("click", () => {
//   const newAnswer = document.createElement("li");
//   newAnswer.classList.add("answer-test");
//   newAnswer.textContent = "hier deine Antwort";
//   toastContainer.append(newAnswer);
// });

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
