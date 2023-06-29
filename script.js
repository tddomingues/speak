const button = document.querySelector("button");
const textArea = document.querySelector("textarea");

button.addEventListener("click", () => {
  const iniciar = new SpeechSynthesisUtterance(textArea.value);
  speechSynthesis.speak(iniciar);
});
