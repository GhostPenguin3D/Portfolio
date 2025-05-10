const text = "NATCHAPHON JAIRUEN";
const target = document.getElementById("typewriter");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 25); // เร่งความเร็วพิมพ์
  }
}

window.addEventListener("DOMContentLoaded", typeLetter);
