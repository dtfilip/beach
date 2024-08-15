const container = document.querySelector('.container');

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
  });
  
  document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
  });

  const colors = ["#66ccff", "#99ffcc", "#ffcc66", "#3366cc", "#339933"];

  let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".btn-navigation")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

