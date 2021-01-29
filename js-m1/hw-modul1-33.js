function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (maxLength >= message.length) {result=message;} 
  else {result = message.slice(0,maxLength) + "..."}
// Пиши код выше этой строки
  return result;
}
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Curabitur ligula sapien', 20));
console.log(formatMessage('Curabitur ligula sapien', 30));
console.log(formatMessage('Curabitur ligula sapien', 15));
console.log(formatMessage('Curabitur ligula sapien', 41));