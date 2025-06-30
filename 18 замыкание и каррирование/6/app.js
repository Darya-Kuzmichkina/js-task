// Сделай formatDate(separator)(day)(month)(year), которая собирает дату строкой
function formatDate(separator) {
    return function (day){
        return function (month){
            return function(year){
console.log(`${day}${separator}${month}${separator}${year}`);

            }
        }
    }
}
formatDate(prompt())(prompt())(prompt())(prompt());