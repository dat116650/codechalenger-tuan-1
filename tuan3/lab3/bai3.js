function calcAverageHumanAge(ages) {
    // Bước 1: Tính tuổi của chó theo tuổi của con người
    let humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  
    // Bước 2: Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi
    let adults = humanAges.filter(age => age >= 18);
  
    // Bước 3: Tính tuổi trung bình của các chú chó trưởng thành ra tuổi người
    let averageAge = adults.reduce((sum, age) => sum + age, 0) / adults.length;
  
    return averageAge;
  }
  
  // Bước 4: Chạy hàm với các dữ liệu mẫu
  console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // TEST DATA 1
  console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // TEST DATA 2