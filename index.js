const form = document.querySelector('[data-js="form"]');
const newQuestion = document.querySelector('[data-js="new-question"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  event.target.elements.yourquestion.focus();
  const quest = document.createElement("li");
  newQuestion.append(quest);
  const answer = document.createElement("li");
  newQuestion.append(answer);
  const tag = document.createElement("li");
  newQuestion.append(tag);
  quest.textContent = data.yourquestion;
  answer.textContent = data.youranswer;
  tag.textContent = data.taginput;
  event.target.reset();
});

// console.clear();

// const button1 = document.querySelector('[data-js="bookmark1"]');
// button1.addEventListener("click", () => {
//   console.log("test");
//   button1.classList.remove("bookmark");
//   button1.classList.toggle("active");

//   console.log("test");
// });
const answer1 = document.querySelector('[data-js="showanswer1"]');
console.log("answer1", answer1);
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

// get new question
