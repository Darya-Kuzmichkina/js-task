// Реализуй divideBy(x)(y), где x — делитель, y — делимое.
function divideBy(x) {
    return function(y){
        y !== 0 ? console.log(x/y) : console.log(null);
    }
}
divideBy(+prompt())(+prompt());