// Класс VowelCounter, который в конструкторе принимает строку и выводит количество гласных.
class VowelCounter{
constructor(str){
this.str=str.split('');
this.sum=this.countStr();
 console.log(this.sum); 
}
countStr(){
    let count =0;
    this.str.forEach(el => {
        if(el=== 'e'|| el==='y'||el==='u'|| el==='i'||el==="o"|| el==="a") count++
    });
    return count
}
}
const vowelCounter = new VowelCounter('qwerty');













