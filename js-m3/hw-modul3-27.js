function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

 //for (let i = 0; i < numbers.length; i += 1) {
  //  const number = numbers[i];
  for (number of numbers){

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}