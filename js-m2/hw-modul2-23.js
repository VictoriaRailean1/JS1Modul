function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const newArrey = [];
  for (let i = 0; i < numbers.length; i += 1)
  { 
    if (numbers[i] > value) {
    newArrey.push(numbers[i]); 
  }
   
  }

 return newArrey;
  // Пиши код выше этой строки
}