function vowels(String)
{
    const vowellist= ["a","A","e","E","i","I","o","O","u","U"]
    var count=0
    for(let char of String)
    {
      if(vowellist.includes(char))
      { 
          return char;
       
      }   
    
    }
}
console.log(vowels("Umuzi"));
