var floatMiles, floatGallons, flaotMPG;
floatMiles = prompt ("Enter miles driven");
floatMiles = parseFloat (floatMiles);
floatGallons = prompt ("Enter gallons of gas used");
flaotGallons = parseFloat (floatGallons);
floatMpg = (floatMiles/floatGallons);
alert("Miles per gallon = " + floatMpg);