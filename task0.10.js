function sameLettersCheck(string1,string2){
  let CommonLetters = [];

  string1= string1.toLowerCase(); 
  string2= string2.toLowerCase();  

  
  for (let i = 0; i < CommonLetters.length; i++ ){
      for (let j = 0; j < CommonLetters.length; j++){
              if (i !== j){
                  if (CommonLetters[i]=== CommonLetters[j]){
                  CommonLetters.push[j];
              }
          }
      }
  }
return CommonLetters;

}
console.log("Common letters: " + sameLettersCheck("house","computers"));
