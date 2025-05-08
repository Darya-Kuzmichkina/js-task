let a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];

for(let i=0;i< a.length; i++){
  switch (a[i]) {
   case "Monday":
   case "Tuesday":
   case "Wednesday":
   case  "Thursday":
   case "Friday":
      console.log('будний день');
      
      break;
      case  "Saturday":
         case "Sunday":
            console.log('выходной день');
  
  }
    
}

