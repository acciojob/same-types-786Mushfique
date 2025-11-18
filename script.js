function isSameType(value1, value2) {
 
	  const isNan1 = Number.isNaN(value1);
  const isNan2 = Number.isNaN(value2);

 
  if (isNan1 && isNan2) return true;


  if (isNan1 || isNan2) return false;

  
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
