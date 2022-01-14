function AreaTriangle(side1,side2,side3)
{
    
  return s = (side1 + side2 + side3) / 2;

  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    
}
    console.log(AreaTriangle(3,4,5));
