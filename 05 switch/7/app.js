let a = +prompt("введите номер месяца");
if (!Number.isNaN(a)) {
    switch (a) {
        case 12:
        case 1:
        case 2:
            console.log("зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("осень");
            break;

    }
}
else {
    console.log("не число");
}