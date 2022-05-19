function baitap2(kw) {
  //B1:DOM tới các input và lấy giá trị
  //Giá trị lấy dc từ input trên HTML có kiểu dữ liệu là string
  //Giá trị là 1 con số, ta cần ép kiểu từ string về number
  var kw = +document.getElementById("kw").value;
  var name = document.getElementById("name").value;
  //B2: Gán biến tạm và tính toán
  var price = 0;
  document.getElementById("tinhTien").style.display = "block";"color:orange"
  document.getElementById("tinhTien").style = "color:blue"
  if (kw < 0) {
    alert('Không hợp lệ');
    return;
  }

  if (kw <= 50) {
    price = kw * 500;
  } else if (kw <= 100) {
    price = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    price = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    price = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    price = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300 ;
  }
  document.getElementById('ketQua').innerHTML = `Tiền điện của ${name} là: ${price} đồng.`;
}
