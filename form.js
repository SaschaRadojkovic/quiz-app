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
