const button1 = document.querySelector('[data-js="bookmark1"]');
button1.addEventListener("click", () => {
  button1.classList.toggle("active");
  console.log("test");
});
