function hoursMinutes(number)
{  
    let hours,minutes;
  
    hours= parseInt(number/60);
    minutes=number%60;

    if (minutes==1 && hours==1)
    {
        return hours + " hour,"+minutes+ " minute";
    }
    if (minutes==1 && hours>=1)
    {
        return hours + " hours,"+minutes+ " minute";
    }
    if (hours>1)
    {
        return hours + " hours,"+minutes+ " minutes";
    }
    if(hours=1)
    {
        return hours + " hour,"+minutes+ " minutes";
    }
    
}
console.log(hoursMinutes(61))
