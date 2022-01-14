function temperatureConversion1(tempC)
{
    tempInF=tempC*1.8+32;
    return tempInF
}
console.log(temperatureConversion1(28))

function temperatureConversion2(tempF)
{
    tempInC=(tempF-32)/1.8;
    return tempInC
}
console.log(temperatureConversion2(271))
