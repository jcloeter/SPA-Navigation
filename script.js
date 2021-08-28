window.addEventListener("hashchange", function () {
  //   console.log("hash changed");
  getContent();
});

window.addEventListener("load", function () {
  //   console.log("hash loaded");
  getContent();
});

const cache = {};

function updateDisplay(text) {
  const display = document.querySelector(".display");
  display.innerHTML = "";
  display.insertAdjacentHTML("afterbegin", text);
}

function getContent() {
  console.log(window.location.hash);
  const file = window.location.hash.split("#")[1] + ".html";

  if (cache.hasOwnProperty(file)) return updateDisplay(cache[file]);
  const request = new XMLHttpRequest();
  request.onload = function () {
    // console.log(request.responseText);
    cache[file] = request.responseText;
    updateDisplay(request.responseText);
  };
  request.open("GET", file);
  request.send(null);
  console.log("😂🐌🐌🐌🐌");
}
