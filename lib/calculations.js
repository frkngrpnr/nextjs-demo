export function calculate(rawValue) {
  const num = parseFloat(rawValue);

  if (isNaN(num)) {
    return { error: "Please enter a valid number." };
  }

  return {
    number: num,
    square: num ** 2,
    cube: num ** 3,
    sqrt: num >= 0 ? Math.sqrt(num) : null,
    isEven: Number.isInteger(num) ? num % 2 === 0 : null,
  };
}
