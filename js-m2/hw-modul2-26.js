function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  //for (let i = 0; i < order.length; i += 1) {
   // total += order[i];}
  for (let orders of order) {
    total += orders;
  }

  // Пиши код выше этой строки
  return total;
}