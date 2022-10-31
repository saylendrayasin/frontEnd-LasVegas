const sum = (...rest) => {
    return rest.reduce((prev, curr) => prev + curr);
  };
  
  const hitung1 = sum(1, 2, 3, 4, 5);
  console.log(hitung1); // 15
  
  const hitung2 = sum(5, 5, 5, 5, 5);
  console.log(hitung2); // 25
  
  const hitung3 = sum(20, 10, 50, 30);
  console.log(hitung3); // 110
  
  // rest parameter
  