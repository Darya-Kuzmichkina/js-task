// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавить проверки на ввод
class Anagram{
str1 = prompt();
str2 = prompt();
sort(){
 const arr1= this.str1.split('').sort();
 const arr2= this.str2.split('').sort();
if(arr1.join("")===arr2.join("")) return true
else return false
}
}
const anagram= new Anagram();
console.log(anagram.sort());
