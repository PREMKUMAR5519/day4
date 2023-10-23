const arr = [34, 56, 3, 56, 4, 2, 3, 5, 7, 11, 13, 17, 19, 23, 343, 68, 34, 87, 8, 45, 34];
const Prime = n => {
   if (n===1){
   return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x == 0){
            return false;
         }
      }
      return true;
   };
};
const filterPrime = arr => {
   const filtered = arr.filter(a => Prime(a));
   return filtered;
};
console.log(filterPrime(arr));