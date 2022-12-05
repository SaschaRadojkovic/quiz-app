const form = document.querySelector('[data-js="form"]');
const newQuestion = document.querySelector('[data-js="new-question"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);
  const createQuestion = document.createElement("section");
  createQuestion.classList.add("card1");

  const header = document.createElement("h2");
  header.classList.add("questionheader");
  createQuestion.append(header);
  header.textContent = "Question";
  event.target.elements.yourquestion.focus();

  const tag = document.createElement("ul");
  tag.classList.add("li");
  createQuestion.append(tag);

  const quest = document.createElement("p");
  quest.classList.add("question_text");
  createQuestion.append(quest);
  quest.textContent = data.yourquestion;

  const answerButton = document.createElement("button");
  answerButton.classList.add("answer");
  createQuestion.append(answerButton);
  answerButton.textContent = "Show Answer";

  const answer = document.createElement("p");
  answer.classList.add("anwser");
  createQuestion.append(answer);
  answer.textContent = data.youranswer;

  tag.textContent = data.taginput;

  newQuestion.append(createQuestion);

  //   newQuestion.append(tag);

  event.target.reset();
});

const input1 = document.querySelector(`[data-js = "input-question1"]`);
const counter1 = document.querySelector(`[data-js="counter1"]`);

input1.addEventListener("input", (evt) => {
  const numLeft = 160 - input1.value.length;
  counter1.textContent = `(${numLeft} characters left)`;
});

const input2 = document.querySelector(`[data-js = "input-question2"]`);
const counter2 = document.querySelector(`[data-js="counter2"]`);

input2.addEventListener("input", (evt) => {
  const numLeft = 160 - input2.value.length;
  counter2.textContent = `(${numLeft} characters left)`;
});
