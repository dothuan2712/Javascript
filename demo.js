function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(2).toUpperCase();
}

console.log(decimalToHexString(2));
console.log(decimalToHexString(48.6));