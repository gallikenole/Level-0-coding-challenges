function vowels(String)
{   
   let changeCase=String.toLowerCase()
   let vowellist= []
    
    for(i=0;i <changeCase.length;i++)
    {
      if (changeCase[i]=="a"||changeCase[i]=="e"||changeCase[i]=="i"||changeCase[i]=="o"||changeCase[i]=="u")
      { 
             
       if(vowellist.indexOf(changeCase[i])==-1)  
       {
         vowellist.push(changeCase[i])
       }    
    }
   }

    console.log(vowellist)
}
      (vowels("Umuzi"))
