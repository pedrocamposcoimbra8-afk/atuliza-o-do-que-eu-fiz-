const botao = document.getElementById("botaoimagem");
const audio = document.getElementById("audiopegadinha");

botao.addEventListener("click", () =>{
          audio.currentTime = 0;
          audio.play();
});