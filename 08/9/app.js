let a = prompt(" введите строку").trim().toUpperCase();
a =a.split(' ');

console.log(a[0][0].toLowerCase()+a[0].slice(1)+" "+a[1][0].toLowerCase()+a[0].slice(1));

