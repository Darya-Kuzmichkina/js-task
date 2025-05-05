let a = prompt("введите строку").trim();
console.log(a.includes('@')&& a.endsWith('.ru')|| a.endsWith('.com') ? true : false);
