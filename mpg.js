<script>
     var floatMiles, floatGallons, floatMpg;
     miles = prompt ("Enter miles driven");
     miles = parseFloat (miles);
     gallons = prompt("Enter gallons of gas used");
     gallons = parseFloat (gallons);
     mpg = (miles/gallons);
     alert("Miles per gallon = " + mpg);
   </script>