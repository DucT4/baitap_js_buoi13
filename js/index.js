document.getElementById('btnTinhTien').onclick = function () {
    //input: soNgayLam:nunber, soTien1Ngay: nunber;
    var soNgayLam = document.getElementById('so-ngay-lam').value;
    var soTien1Ngay = 10;
    //output: tinhTien:number;
    var tinhTien = 0;
    //process
    tinhTien = soNgayLam * soTien1Ngay;
    document.getElementById('kq-bai1').innerHTML = tinhTien + '$';
}

//bai2:
document.getElementById('btnTinhTB').onclick = function () {
    // var nhapSo1 = +document.getElementById('nhap-so').value;
    // var nhapSo2= +document.getElementById('nhap-so5').value;
    // var nhapSo3 = +document.getElementById('nhap-so2').value;
    // var nhapSo4 = +document.getElementById('nhap-so3').value;
    // var nhapSo5 = +document.getElementById('nhap-so4').value;
    // var tinhTB= 0;
    // tinhTB= (nhapSo1+nhapSo2+nhapSo3 +nhapSo4+nhapSo5)/5;
    // document.getElementById('kq-bt2').innerHTML = tinhTB;
    //cách 2:
    tinhTB('nhap-so', 'nhap-so2', 'nhap-so3', 'nhap-so4', 'nhap-so5', 'kq-bt2')
}
function tinhTB(id1, id2, id3, id4, id5, idOutput) {
    //input: so:nunber;
    var d1 = +document.getElementById(id1).value;
    var d2 = +document.getElementById(id2).value;
    var d3 = +document.getElementById(id3).value;
    var d4 = +document.getElementById(id4).value;
    var d5 = +document.getElementById(id5).value;
    //output: tinhTb: number;
    var tinhTBC = (d1 + d2 + d3 + d4 + d5) / 5;
    //process:
    document.getElementById(idOutput).innerHTML = tinhTBC;

}
//bài tập 3:
document.getElementById('btndoiTien').onclick = function () {//input:soTienCanDoi: number; 1$=23.500vnd
    var soTienCanDoi = document.getElementById('nhap-so-tien').value;
    //output: doiTien: number
    var doiTien = 0;
    doiTien = soTienCanDoi * 23500;
    //process
    document.getElementById('kq-b3').innerHTML = doiTien + 'vnd';
}
//Bài tâp 4:
document.getElementById('btnTinhCS').onclick = function () {
    var cD = document.getElementById('chieu-dai').value;
    var cR = document.getElementById('chieu-rong').value;
    var dienTich = cD * cR;
    var chuVi = (cD + cR) * 2;
    document.getElementById('kq-baii4').innerHTML = `
chu vi hcn:${chuVi} cm<br>
diện tích hcm:${dienTich} cm2
`;
}


//bài tập 5:
document.getElementById('btnTinhTong2So').onclick = function () {
   var so= document.getElementById('nhap-vao-di').value;
  var hangDV = so%10;// chia lấy dư để lấy được hàng đv
  var hangChuc = (so-hangDV)/10;
  var tong= hangDV + hangChuc;
  document.getElementById('ketquabai5').innerHTML = tong;
}