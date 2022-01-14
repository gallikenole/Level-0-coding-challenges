function hoursMinutes(number)
{  
    let hours,minutes;
  
    hours= parseInt(number/60);
    minutes=number%60;
    return hours + " hour(s),"+minutes+ " minute(s)";


}
console.log(hoursMinutes(133))
