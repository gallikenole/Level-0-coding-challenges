function celsiusToFahrenheit(tempC)
{
    tempInF=tempC*1.8+32;
    return tempInF
}
console.log(celsiusToFahrenheit(28))

function fahrenheitToCelsius(tempF)
{
    tempInC=(tempF-32)/1.8;
    return tempInC
}
console.log(fahrenheitToCelsius(271))
