let a = prompt().toLowerCase();
let b = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
        b++;

    }

}
console.log(a.length-b);
