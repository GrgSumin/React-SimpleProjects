let person = [1, 2, 3, 4, 5, 6];

const mul = (num) => {
  return num * 2;
};

let p = person.map(mul);
console.log(p);

console.log(
  person.filter((n) => {
    return n != 2;
  })
);
let student = [
  {
    name: "bibek",
  },
  {
    name: "dipesh",
  },
];

const address = ["Pokhara", "Nepal"];
let a = student.map((e, index) => {
  return { ...e, address: address[index] };
});
console.log(a);

let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  odd.filter((e) => {
    return e % 2 == 0;
  })
);

console.log(
  odd.reduce((a, b) => {
    return a + b;
  }, 1)
);

let cart = [
  {
    name: "mobile",
    price: 1000,
    quantity: 2,
  },
  {
    name: "laptop",
    price: 10000,
    quantity: 3,
  },
  {
    name: "laptop",
    price: 10000,
    quantity: 3,
  },
];

let total = cart.reduce((a, b) => {
  return a + b.price * b.quantity;
}, 0);
console.log(total);
