function AreaTriangle(side1,side2,side3)
{
    
   const s = (side1 + side2 + side3) / 2;

   const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

   return area
    
}
    console.log(AreaTriangle(3,4,5));
