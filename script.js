function animateText(elementId, text, delay = 50, callback = null) {
  const el = document.getElementById(elementId);
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    el.style.opacity = 1;
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, delay);
}

window.onload = () => {
  animateText("helloText", "HELLO EVERYONE 👋", 40, () => {
    animateText("nameText", "I'M NATCHAPHON JAIRUEN", 30, () => {
      animateText("studentText", "Student", 25, () => {
        animateText("welcomeText", "Welcome to My personal website", 20);
      });
    });
  });
};
