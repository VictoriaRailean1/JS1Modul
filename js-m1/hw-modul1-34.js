function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(input); // Дополни эту строку
  return normalizedInput;
}
console.log(normalizeInput('Привет мир'));
console.log(normalizeInput('Это НЕ СпаМ'));
console.log(normalizeInput('Большие СКИДКИ'));