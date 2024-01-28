function checkDogs(dogsJulia, dogsKate) {
   
    let correctDogsJulia = dogsJulia.slice(2, -2);
  
    // Bước 2: Tạo một mảng có dữ liệu 
    let dogs = correctDogsJulia.concat(dogsKate);
  
    // Bước 3: Đối với mỗi con chó còn lại, đăng nhập vào bảng điều khiển xem đó là chó trưởng thành hay chó con
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Chó số ${i + 1} là người lớn và ${dog} tuổi`);
      } else {
        console.log(`Chó số ${i + 1} vẫn là chó con`);
      }
    });
  }
  
  // Bước 4: Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);