const button1 = document.querySelector('[data-js="bookmark1"]');
button1.addEventListener("click", () => {
  console.log("test");
  button1.classList.remove("bookmark");
  button1.classList.toggle("active");

  console.log("test");
});
