// *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inter"
class CommonPrefix{
    constructor(strings){
this.strings=strings;
    }
    findLongestPrefix(){
  if (this.strings.length === 0) return '';

        let prefix = this.strings[0];

        for (let i = 1; i < this.strings.length; i++) {
          
            while (this.strings[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, prefix.length - 1);
              
                if (prefix === '') return '';
            }
        }

        return prefix;
    }
}
const pref= new CommonPrefix(["interview", "interval", "internet"]);
console.log(pref.findLongestPrefix());
