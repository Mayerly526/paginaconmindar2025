const characters = [
  "personajes/personajes/personaje1.png",
  "personajes/personajes/personaje2.png",
  "personajes/personajes/personaje3.png"
];

let currentIndex = 0;

function startExperience() {
  const welcome = document.getElementById("welcome");
  const main = document.getElementById("main");
  const video = document.getElementById("video");
  const characterImg = document.getElementById("character");

  welcome.style.display = "none";
  main.style.display = "block";

  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      video.srcObject = stream;
      characterImg.src = characters[currentIndex];
    })
    .catch((err) => {
      alert("No se pudo acceder a la cámara: " + err.message);
    });
}

function changeCharacter() {
  currentIndex = (currentIndex + 1) % characters.length;
  document.getElementById("character").src = characters[currentIndex];
}