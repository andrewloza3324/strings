let a = prompt();

let b = a.split(",");
console.log(b);
let c;
let array = [];
for (let i = 0; i < b.length; i++) {
  c = b[i].split("-");
  array.push(Number(c[1]));
}

let result = 0;
for (let i = 0; i < array.length; i++) {
  result += array[i];
}
console.log(result);
