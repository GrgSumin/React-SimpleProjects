const alpha = [2, 3, 4, 5];
alpha.push(7);
alpha.sort();
const multiply = (n) => {
  return n * 3;
};

const yess = alpha.map(multiply);

console.log(yess);
document.querySelector(".arr").innerHTML = yess;

const joining = [
  { firstName: "AJit", SecondName: "Nepali" },
  { firstName: "Sanjaya", SecondName: "Basnet" },
  { firstName: "Nishnata", SecondName: "Subedi" },
];

joining.push({ firstName: "Jwalan", SecondName: "Gurung" });
joining.pop({ firstName: "Sanjaya", SecondName: "Basnet" });

const jodam = (e) => {
  return [e.firstName, e.SecondName].join();
};

const ok = joining.map(jodam);

document.querySelector(".arr2").innerHTML = ok;

const superstar = ["john Cena", "Randy Orton", "AJ Styles"];

console.log(superstar.slice(2));
console.log(typeof superstar);
superstar.toString();
console.log(typeof superstar.toString());

const diva = ["nikki bella", "AJ lee", "Becky Lycng"];
let wweSuperStar = superstar.concat(diva);
console.log(wweSuperStar);

let ages = [1, 2, 3, 4, 5, 33, 23, 44, 24, 27, 24, 45, 67, 98, 0, 12, 32];

const checkAge = (age) => {
  return age > document.querySelector(".search").value;
};

const findAge = () => {
  let group = ages.filter(checkAge);

  document.querySelector(".showAge").textContent =
    group != "" ? group : "age not found";

  console.log(group);
};
