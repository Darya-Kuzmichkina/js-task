let a = [2, 3, 4, 5];
let i=0;
let pr =1;

// while (i<a.length) {
//   pr*= a[i];
//   i++;
// }
// console.log(pr);


// for(let i=0;i<a.length;i++){
 //pr*= a[i];
//   i++;
// }
// console.log(pr);

 for(let el of a){
   pr*=el;
  }
  console.log(pr);