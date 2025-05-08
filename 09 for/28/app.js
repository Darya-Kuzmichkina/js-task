let a = [1, -2, 3, -4, 5, -6];
let b = 0;
for (let i = 0; i < a.length; i++) {

    if (!isNaN(a[i]) && a[i] < 0) {
        continue
    }
    b += a[i];
}
console.log(b);

