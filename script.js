window.onload = () => {

  document.getElementById("helloText").innerHTML = "HELLO EVERYONE 👋";
  document.getElementById("studentText").innerHTML = "Student";
  document.getElementById("welcomeText").innerHTML = "Welcome to My personal website";

  const text = "I'M NATCHAPHON JAIRUEN";
  const el = document.getElementById("nameText");
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    el.style.opacity = 1;
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
};
