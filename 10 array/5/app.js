let a = [];
let b = ["apple", 3, "orange", 2];
for (let i = 0; i < b.length; i++) {
    if (!isNaN(b[i])) {
        a.push(b[i]);
    }
}
console.log(a);
