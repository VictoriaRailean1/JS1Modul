function includes(array, value) {
  // Пиши код ниже этой строки
for(let i = 0; i < array.length; i +=1) {
  if(array[i] === value) {
  return true;
  }
}
return false;
  
  // Пиши код выше этой строки
}