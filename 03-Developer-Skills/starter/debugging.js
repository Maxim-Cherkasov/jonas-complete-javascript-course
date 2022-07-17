// Debugging

/*
  no matter what we write in prompt, it
  always will be a string

  when plus operator sees a srting, it
  will convert both operands to strings
  and then concatinate the strings
*/

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    //C Fix
    value: Number(prompt('Degrees celsius:')),
  };

  //B. Find the bug 09:07
  console.table(measurment);

  //console.log(measurment.value);
  //console.warn(measurment.value);
  //console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};
//A. Identify a bug
console.log(measureKelvin());

