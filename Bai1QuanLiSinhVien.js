function baitap1() {
    // check empty string
  
    strdiemChuan = document.getElementById("diemChuan").value;
    diemChuan = +document.getElementById("diemChuan").value;
    khuVuc = +document.getElementById("khuVuc").value;
    doiTuong = +document.getElementById("doiTuong").value;
    strdiem1 = document.getElementById("diem1").value;
    diem1 = +document.getElementById("diem1").value;
    strdiem2 = document.getElementById("diem2").value;
    diem2 = +document.getElementById("diem2").value;
    strdiem3 = document.getElementById("diem3").value;
    diem3 = +document.getElementById("diem3").value;
    if (
      diem1 > 10 ||
      diem2 > 10 ||
      diem3 > 10 ||
      diemChuan > 30 ||
      strdiemChuan === "" ||
      strdiem1 === "" ||
      strdiem2 === "" ||
      strdiem3 === ""
    ) {
      return kiemTra();
    }
  
    //   Tính tổng điểm đạt được
    var diemTong = diem1 + diem2 + diem3 + khuVuc + doiTuong;
  
    // So sánh với điểm chuẩn
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
      diemLiet();
    } else if (diemTong >= diemChuan) {
      ketQuaDau(diemTong);
    } else {
      ketQuaRot(diemTong);
    }
  }
  
  function kiemTra() {
    document.getElementById("result").style = "block";
    document.getElementById("result").style = "color:red";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Nhập điểm không hợp lệ. Vui lòng nhập lại`;
  }

  function ketQuaDau(diemTong) {
    document.getElementById("result").style = "block";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${diemTong}`;
    document.getElementById("result").style = "color:green";
  }

  function ketQuaRot(diemTong) {
    document.getElementById("result").style = "block";
    document.getElementById("result").style = "color:orange";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTong}`;
  }
  
  function diemLiet() {
    document.getElementById("result").style = "block";
    document.getElementById(
      "resultFinal"
    ).innerHTML = `Bạn đã rớt. Do có điểm liệt nhỏ hơn hoặc bằng 0`;
  }
  