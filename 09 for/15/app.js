let a = prompt();
let b = a.split(' ');
let c= '';
for( let i=0; i< b.length;i++){
    c+= b[i][0].toUpperCase()+b[i].slice(1)+' ';

}
console.log(c);
