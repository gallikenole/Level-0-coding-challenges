function hoursMinutes(number)
{  
    let hours,minutes;
  
    hours= parseInt(number/60);
    minutes=number%60;
    if (hours>1)
    {
        return hours + " hours,"+minutes+ " minutes";
    }
    else if(hours=1)
    {
        return hours + " hour,"+minutes+ " minutes";
    }
    
}
console.log(hoursMinutes(133))
