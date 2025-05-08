const a = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let one=0, two=0, three=0, four=0, five=0;
for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
        case 1:
            one++;
            break;

        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
    }
}
    console.log("1:" + one);
    console.log("2:" + two);
    console.log("3:" + three);
    console.log("4:" + four);
    console.log("5:" + five);
    