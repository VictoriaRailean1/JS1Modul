function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки

const newArrey = firstArray.concat(secondArray);
  
  if (newArrey.length > maxLength) 
    
  {return newArrey.slice(0, maxLength);
   
  }
  
  return newArrey;
    
    // Пиши код выше этой строки
  }