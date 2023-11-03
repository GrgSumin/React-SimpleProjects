const btn = document.querySelector(".btn");
const ari = document.querySelector(".show");

let listShown = false;

let names = ["sumin", "mumin", "tumin", "wumin"];
btn.addEventListener(
  "click",
  (e = () => {
    if (!listShown) {
      ari.innerHTML = names;
    } else {
      ari.innerHTML = "";
    }
    listShown = !listShown;
  })
);
