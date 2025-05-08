let a = prompt();
let b=0;
for (let i = 0; i <= a.length; i++) {
    if (a[i]===' ') {
        continue
    }
b++
}
console.log(b);
