function vowels(String)
{   
   let changeCase=String.toLowerCase()
   let vowelList= []
    
    for(i=0;i <changeCase.length;i++)
    {
      if (changeCase[i]=="a"||changeCase[i]=="e"||changeCase[i]=="i"||changeCase[i]=="o"||changeCase[i]=="u")
      { 
             
       if(vowelList.indexOf(changeCase[i])==-1)  
       {
         vowelList.push(changeCase[i])
       }    
    }
   }

    console.log(vowelList)
}
      (vowels("Umuzi"))
