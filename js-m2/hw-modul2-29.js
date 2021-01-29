function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
const newArray = [];
  
  for(let i = start; i <= end; i+=1) {
    if(i % 2 === 0) {newArray.push(i)};
  }

    return newArray;
    // Пиши код выше этой строки
  }