const a = [1, 'hi', 2, 'hello', 3];
for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
        console.log("число "+ a[i]);
    }
    else {
        console.log("строка "+ a[i]);
    }
}