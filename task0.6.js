function maximumNumber(no1,no2,no3)
{

if (no1 > no2 && no1 > no3)
     {
       return no1;
     } 
     else if (no2 > no3) 
     {
      return no2;
     } 
     else
    {
      return no3;
    }
  
}
console.log(maximumNumber(1,2,3));
