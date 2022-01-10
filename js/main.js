function hienThiGia(price) {
  var string = "";
  var flag = 0;
  while (price > 0) {
    if (flag === 3) {
      string = "," + string;
      flag = 0;
    }
    var number = price % 10;
    flag += 1;
    if (number != 0) {
      string = number + string;
    }
    else {
      string = "0" + string;
    }
    price = parseInt((price / 10).toString());
  }
  return string + "đ";
}

function createLocalStorage () {
  if (localStorage.getItem('product') === null) {
    var productArray = [
      { id: 22, name: 'BMW S1000RR', price: 1099000000, typeProduct: 'BMW', image: './assets/image/bmw/s1000rr.png' },
      { id: 14, name: 'Scrambler-Silver', price: 568000000, typeProduct: 'BMW', image: './assets/image/bmw/Scrambler-silver.jpg' },
      { id: 2, name: 'BMW-S-1000-R', price: 679000000, typeProduct: 'BMW', image: './assets/image/bmw/BMW-S-1000-R.jpg' },
      { id: 15, name: 'DVL', price: 799000000, typeProduct: 'Ducati', image: './assets/image/ducati/DVL.png' },
      { id: 3, name: 'Monster-937', price: 436000000, typeProduct: 'Ducati', image: './assets/image/ducati/Monster-937.png' },
      { id: 16, name: 'MTS-V4', price: 770000000, typeProduct: 'Ducati', image: './assets/image/ducati/MTS-V4.png' },
      { id: 4, name: 'PV4', price: 1392000000, typeProduct: 'Ducati', image: './assets/image/ducati/PV4.png' },
      { id: 17, name: 'Fat-Boy', price: 749200000, typeProduct: 'Harley Davidson', image: './assets/image/harley/fat-boy.png' },
      { id: 5, name: 'Iron-1200', price: 439500000, typeProduct: 'Harley Davidson', image: './assets/image/harley/iron-1200.png' },
      { id: 18, name: 'Low-Raider', price: 599200000, typeProduct: 'Harley Davidson', image: './assets/image/harley/low-raider.png' },
      { id: 6, name: 'Road-King', price: 1139100000, typeProduct: 'Harley Davidson', image: './assets/image/harley/road-king.png' },
      { id: 19, name: 'Sportsters', price: 589000000, typeProduct: 'Harley Davidson', image: './assets/image/harley/sportsters.png' },
      { id: 7, name: 'Street-Bob', price: 579100000, typeProduct: 'Harley Davidson', image: './assets/image/harley/street-bob.png' },
      { id: 20, name: 'CB1000R', price: 468000000, typeProduct: 'Honda', image: './assets/image/honda/CB1000R.png' },
      { id: 8, name: 'CBR650R', price: 253990000, typeProduct: 'Honda', image: './assets/image/honda/CBR650R.png' },
      { id: 21, name: 'CBR1000RR-R', price: 1049000000	, typeProduct: 'Honda', image: './assets/image/honda/CBR1000RR-R.png' },
      { id: 9, name: 'Future-125', price: 30290000, typeProduct: 'Honda', image: './assets/image/honda/future-125.png' },
      { id: 30, name: 'Vision', price: 30290000, typeProduct: 'Honda', image: './assets/image/honda/vision.png' },
      { id: 26, name: 'WinerX', price: 46090000, typeProduct: 'Honda', image: './assets/image/honda/WinerX.png' },
      { id: 1, name: 'Wave-Alpha', price: 18390000, typeProduct: 'Honda', image: './assets/image/honda/wave-alpha.png' },
      { id: 11, name: 'Ninja 650', price: 200000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/ninja650.png' },
      { id: 31, name: 'Ninja H2 Carbon', price: 1298000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/ninja-h2-carbon.png' },
      { id: 28, name: 'Ninja ZX10R', price: 728000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/ninja-zx10r.png' },
      { id: 23, name: 'VulcanS', price: 238000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/vulcanS.png' },
      { id: 12, name: 'Z650', price: 186000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/z650.png' },
      { id: 25, name: 'Z1000R', price: 477000000, typeProduct: 'Kawasaki', image: './assets/image/kawasaki/z1000R.png' },
      { id: 24, name: 'GD110HU', price: 28490000 , typeProduct: 'Suzuki', image: './assets/image/suzuki/GD110HU.jpg' },
      { id: 27, name: 'GSX R150', price: 71990000, typeProduct: 'Suzuki', image: './assets/image/suzuki/gsx-r150.png' },
      { id: 10, name: 'GSX S150', price: 64400000, typeProduct: 'Suzuki', image: './assets/image/suzuki/gsx-s150.jpg' },
      { id: 33, name: 'GZ150 A', price: 69500000 , typeProduct: 'Suzuki', image: './assets/image/suzuki/GZ150-A.jpg' },
      { id: 40, name: 'IMPULSE-125-Fi', price: 31990000, typeProduct: 'Suzuki', image: './assets/image/suzuki/IMPULSE-125-Fi.png' },
      { id: 34, name: 'Raider R150', price: 49190000, typeProduct: 'Suzuki', image: './assets/image/suzuki/raider-r150.jpg' },
      { id: 29, name: 'Satria F150', price: 51990000, typeProduct: 'Suzuki', image: './assets/image/suzuki/satria-f150.png' },
      { id: 38, name: 'Exciter 155', price: 51690000, typeProduct: 'Yamaha', image: './assets/image/yamaha/exciter-155.jpg' },
      { id: 35, name: 'Grande', price: 50500000, typeProduct: 'Yamaha', image: './assets/image/yamaha/grande.png' },
      { id: 32, name: 'MT 15', price: 69000000, typeProduct: 'Yamaha', image: './assets/image/yamaha/MT-15.png' },
      { id: 13, name: 'Sirius', price: 21800000, typeProduct: 'Yamaha', image: './assets/image/yamaha/sirius.png' },
      { id: 37, name: 'TFX', price: 72900000, typeProduct: 'Yamaha', image: './assets/image/yamaha/TFX.png' },
      { id: 36, name: 'YZF R3', price: 129000000, typeProduct: 'Yamaha', image: './assets/image/yamaha/YZF-R3.png' },
    ];
    localStorage.setItem('product', JSON.stringify(productArray));
  }
  if (localStorage.getItem('account') == null) {
    const arrayAccount = [
      {
        username: 'tai000',
        password: '123456',
      },
    ];
    const arrayGioHang = [
      {
        name: 'tai000',
        arrayCart: []
      }
    ];
    const arrayOrder = [
      {
        name: 'tai000',
        arrayOrder: []
      }
    ];
    localStorage.setItem('order', JSON.stringify(arrayOrder));
    localStorage.setItem('account', JSON.stringify(arrayAccount));
    localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  }
}

function hienThiGioHang() {
  if (localStorage.getItem('status') == null) {
    alert('Vui lòng đăng nhập để có thể truy cập giỏ hàng');
  }
  else {
    location.assign('./giohang.html');
  }
}

function hienThiNutTrang(size, soSanPhamMotTrang, indexTrangHienTai) {
  const elementPage = document.querySelector('.right .right-pagination');
  var stringHTML = ``;

  var number = parseInt((size / soSanPhamMotTrang));
  var numberPage = (number * soSanPhamMotTrang == size) ? number : number + 1;
  for (var i = 1; i <= numberPage; i++) {
      stringHTML += `
                    <button class="pagination-element ${i === indexTrangHienTai && "active" || ''}">${i}</button>
                  `;
  }
  elementPage.innerHTML = stringHTML;
}

function taoHTMLSanPham(product) {
  return `
            <div class="product-item">
              <div class="product__item-img">
                <img src="${product.image}" alt="">
              </div>

              <div class="product__item-name">
                <span class="name">${product.name}</span>
              </div>

              <div class="produc__item-price">
                <span class="item-price">${hienThiGia(product.price)} </span>
              </div>

              <div class="product__item-action">
                <button class="product__item-info-icon" onclick="moFormDetail(${product.id})"><i class="fas fa-info-circle"></i>Thông tin chi tiết</button>
                <button class="product__item-add-icon" onclick="themSanPhamVaoGioHang(${product.id}, 1)"><i class="fas fa-shopping-basket"></i>Mua</button>
              </div>
            </div>
          `;
}

function hienThiSanPham(data, soSanPhamMotTrang, indexTrangHienTai) {
  const elementProducts = document.querySelector('.right .right-product');
  const danhSachSanPhamTrongMotTrang = data.slice(soSanPhamMotTrang * (indexTrangHienTai - 1), soSanPhamMotTrang * indexTrangHienTai);
  var stringHTML = ``;

  for (var i = 0; i < danhSachSanPhamTrongMotTrang.length; i++) {
      const product = danhSachSanPhamTrongMotTrang[i];
      stringHTML += taoHTMLSanPham(product);
  }
  elementProducts.innerHTML = stringHTML;
}

function hienThiDanhSachSanPham(duLieu, soSanPhamMotTrang, tieuDe) {
  const elementTieuDe = document.querySelector('.right .right-title');
  var indexTrangHienTai = 1;
  elementTieuDe.innerText = tieuDe;
  hienThiNutTrang(duLieu.length, soSanPhamMotTrang, indexTrangHienTai);
  hienThiSanPham(duLieu, soSanPhamMotTrang, indexTrangHienTai);
  const elementNutChuyenTrang = document.querySelectorAll('.right-pagination .pagination-element');
  for (var i = 0; i < elementNutChuyenTrang.length; ++i) {
      elementNutChuyenTrang[i].onclick = function (event) {
          chuyenTrang(event, duLieu);
      };
  }
}

function phanLoaiSanPham(event, nameType) {
  const elementNutHienTai = event.target;
  const elementNutCu = elementNutHienTai.parentElement.querySelector('.active-list');
  const elementTieuDe = document.querySelector('.right .right-title');

  if (elementNutHienTai === elementNutCu) {
      return;
  }

  const duLieuSanPham = JSON.parse(localStorage.getItem('product'));
  var duLieuPhanLoai = [];
  var title = nameType;
  if (nameType === 'all') {
      duLieuPhanLoai = duLieuSanPham;
      title = 'Tất cả Xe';
  }
  else {
    for (var i = 0; i < duLieuSanPham.length; ++i) {
      if (duLieuSanPham[i].typeProduct === nameType) {
          duLieuPhanLoai.push(duLieuSanPham[i]);
      }
    }
  }
  elementNutCu.classList.remove('active-list');
  elementNutHienTai.classList.add('active-list');
  hienThiDanhSachSanPham(duLieuPhanLoai, 8, title);
  elementTieuDe.scrollIntoView(true);
}

function themSanPhamVaoGioHang(id, soLuongSanPham) {
  const dataStatus = localStorage.getItem('status');
  if (dataStatus == null) {
    alert('Vui lòng đăng nhập để có thể mua sản phẩm');
    return;
  }

  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));
  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === dataStatus) {
      var checkId = false;
      for (var j = 0; j < arrayGioHang[i].arrayCart.length; ++j) {
        if (arrayGioHang[i].arrayCart[j].id === id) {
          arrayGioHang[i].arrayCart[j].quantity += soLuongSanPham;
          checkId = true;
          break;
        }
      }

      if (!checkId) {
        var sanPhamMoi = {
            id: id,
            quantity: soLuongSanPham
        };
        arrayGioHang[i].arrayCart.push(sanPhamMoi);
      }

      localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
      alert('Mua hàng thành công')
      return;
    }
  }
}

function themSanPhamTrongChiTiet(event, id) {
  const target = event.target;
  const elementChiTiet = target.parentElement;
  const soLuongSanPham = parseInt(elementChiTiet.querySelector('.quantity-input').value);
  document.querySelector('.modal__detail').style.display = 'none';
  themSanPhamVaoGioHang(id, soLuongSanPham);
}

function chuyenTrang(event, duLieu) {
  const elementTieuDe = document.querySelector('.right .right-title');
  const elementNutHienTai = event.target;
  const indexTrangHienTai = parseInt(elementNutHienTai.innerText);
  const elementNutCu = elementNutHienTai.parentElement.querySelector('.active');
  if (elementNutHienTai === elementNutCu) {
    return;
  }
  elementNutHienTai.classList.add("active");
  elementNutCu.classList.remove("active");
  hienThiSanPham(duLieu, 8, indexTrangHienTai);
  elementTieuDe.scrollIntoView(true);
}



function moFormDangKy() {
  document.querySelector('.modal__form').style.display = 'flex';
  document.querySelector('.auth-form.register').style.display = 'block';
  document.querySelector('.auth-form.login').style.display = 'none';
}

function moFormDangNhap() {
  document.querySelector('.modal__form').style.display = 'flex';
  document.querySelector('.auth-form.login').style.display = 'block';
  document.querySelector('.auth-form.register').style.display = 'none';
}

function toggleForm() {
  var login = document.querySelector('.auth-form.login');
  var register = document.querySelector('.auth-form.register');
  
  if (register.style.display === 'none') {
    register.style.display = 'block';
    login.style.display = 'none';
  }
  else if (login.style.display === 'none') {
    login.style.display = 'block';
    register.style.display = 'none';
  }
}

function dongForm() {
  var dong = document.querySelector('.modal__form');  
  if (dong.style.display === 'none') {
    dong.style.display = 'flex';
  }
  else {
    dong.style.display = 'none';
  }
}

function moFormDetail(id) {
  const elementDetails = document.querySelector('.modal__detail');
  elementDetails.style.display = 'flex';
  const duLieuSanPham = JSON.parse(localStorage.getItem('product'));

  for (var i = 0; i < duLieuSanPham.length; ++i) {
    const product = duLieuSanPham[i];
    if (product.id == id) {
      const elementProductDetails = document.querySelector('.product__item-detail');
      elementProductDetails.querySelector('.product__item-detail-img img').src = product.image;
      elementProductDetails.querySelector('.product__item-detail-name .name').innerText = product.name;
      elementProductDetails.querySelector('.product__item-detail-name .price').innerText = 'Giá: ' + hienThiGia(product.price);
      elementProductDetails.querySelector('.product__item-detail-name .NSX').innerText = 'Nhà sản xuất: ' + product.typeProduct;
      elementProductDetails.querySelector('.product__item-detail-footer .add__cart').setAttribute('onClick', 'themSanPhamTrongChiTiet(event, '+id+')');
      elementProductDetails.querySelector('.product__item-detail-footer .quantity-down').setAttribute('onClick', 'giamSoLuong(event)');
      elementProductDetails.querySelector('.product__item-detail-footer .quantity-up').setAttribute('onClick', 'tangSoLuong(event)');
      elementProductDetails.querySelector('.product__item-detail-footer .quantity-input').value = '1';
      return;
    }
  }
}

function dongFormDetail () {
  var dong = document.querySelector('.modal__detail');  
  if (dong.style.display === 'none') {
    dong.style.display = 'flex';
  }
  else {
    dong.style.display = 'none';
  }
}

function batTimKiem(togtimKiem, timKiem) {
  togtimKiem.classList.remove('active');
  timKiem.style.display = 'flex';
}

function dongTimKiem(togtimKiem, timKiem) { 
  togtimKiem.classList.add('active');
  timKiem.style.display = 'none';
  document.querySelector('.right-subtitle').style.display = 'none';
  const duLieuSanPham = JSON.parse(localStorage.getItem('product'));
  hienThiDanhSachSanPham(duLieuSanPham, 8, 'Tất cả Xe');
}

function toggleTimKiem() {
  var timKiem = document.querySelector('.search__condition');
  var togtimKiem = document.querySelector('.search-wrap');

  if(timKiem.style.display === 'none') {
    batTimKiem(togtimKiem, timKiem);
  }
  else {
    dongTimKiem(togtimKiem, timKiem);
  }
}

function timKiem() {
  const valueTimKiemTheoTen = document.querySelector('.search__condition-text input').value;
  const valueTimKiemTheoGia = document.querySelector('#search__condition-price').value;
  const valueTimKiemTheoPhanLoai = document.querySelector('#search__condition-name').value;
  const elementNangCao = document.querySelector('.search__condition');

  const arrayProduct = JSON.parse(localStorage.getItem('product'));
  const thongBao = document.querySelector('.right-subtitle');

  var arrayProductTimKiem = [];
  if (elementNangCao.style.display === 'flex') {
    if (valueTimKiemTheoTen !== '') {
      var checkTimKiem = 0;
      for (var i = 0; i < arrayProduct.length; ++i) {
        if (arrayProduct[i].name.includes(valueTimKiemTheoTen)) {
          arrayProductTimKiem.push(arrayProduct[i]);
          checkTimKiem += 1;
        }
      }

      if(checkTimKiem == 0) {
        thongBao.style.display = 'block';
        return;
      }
      else {
        thongBao.style.display = 'none';
      }
    }

    else {
      thongBao.style.display = 'none';
      var giaNhoNhat = 0;
      var giaLonNhat = 0;
      switch (parseInt(valueTimKiemTheoGia)) {
        case 1:
          giaNhoNhat = 0;
          giaLonNhat = 100000000;
          break;
        case 2:
          giaNhoNhat = 100000000;
          giaLonNhat = 500000000;
          break;
        case 3:
          giaNhoNhat = 500000000;
          giaLonNhat = 1000000000;
          break;
        case 4:
          giaNhoNhat = 1000000000;
          giaLonNhat = 10000000000;
          break;
        default:
          giaNhoNhat = 0;
          giaLonNhat = 10000000000;
      }
    }

    for (var i = 0; i < arrayProduct.length; ++i) {
      if (valueTimKiemTheoPhanLoai === 'all') {
        if (arrayProduct[i].price >= giaNhoNhat && arrayProduct[i].price <= giaLonNhat) {
          arrayProductTimKiem.push(arrayProduct[i]);
        }
      }
      else {
        if (arrayProduct[i].typeProduct === valueTimKiemTheoPhanLoai && arrayProduct[i].price >= giaNhoNhat && arrayProduct[i].price <= giaLonNhat) {
          arrayProductTimKiem.push(arrayProduct[i]);
        }
      }
    }
  }

  if (arrayProductTimKiem.length === 0) {
    thongBao.style.display = 'block';
    return;
  }
  var stringHTML = '';
  for (var i = 0; i < arrayProductTimKiem.length; ++i) {
    stringHTML += taoHTMLSanPham(arrayProductTimKiem[i]);
  }

  hienThiDanhSachSanPham(arrayProductTimKiem, 8, '');
}

function dangXuat() {
  localStorage.removeItem('status');
  location.reload();
}

function dangNhap() {
  var username = document.getElementById('tk-log').value;
  var password = document.getElementById('mk-log').value;
  const arrayAccount = JSON.parse(localStorage.getItem('account'));
  var checkAccount = true;

  for (var i = 0; i < arrayAccount.length; i++) {
    if (arrayAccount[i].username === username && arrayAccount[i].password === password) {
      localStorage.setItem('status', arrayAccount[i].username);
      checkAccount = false;
      break;
    }
  }
  if (checkAccount) {
    alert('Sai thông tin đăng nhập');
    document.getElementById('tk').select();
    document.getElementById('mk').focus();
    return;
  }

  dongForm();
  window.location.href = "";
}

function dangKy() {
  var arrayAccount = JSON.parse(localStorage.getItem('account'));
  var rUsername = document.getElementById('tk-reg');
  var rPassword = document.getElementById('mk-reg');
  var rRepassword = document.getElementById('reMk-reg');

  if (rUsername.value.trim() == "") {
    alert('Vui lòng nhập tên đăng nhập');
    rUsername.focus();
    rUsername.select();
    return;
  }
  if (rPassword.value.trim() == "") {
    alert('Vui lòng nhập mật khẩu');
    rPassword.focus();
    rPassword.select();
    return;
  }
  if (rRepassword.value.trim() == "") {
    alert('Vui lòng nhập lại mật khẩu');
    rRepassword.focus();
    rRepassword.select();
    return;
  }

  for (var i = 0; i < arrayAccount.length; i++) {
    if (arrayAccount[i].username === rUsername.value) {
      alert('Tên đăng nhập đã có người sử dụng');
      rUsername.focus();
      return;
    }
  }

  if (rPassword.value != rRepassword.value) {
    alert('Mật khẩu nhập lại không trùng khớp');
    rRepassword.focus();
    rRepassword.select();
    return;
  }

  var account = {
    username: rUsername.value,
    password: rPassword.value,
    name: rUsername.value
  };
  arrayAccount.push(account);
  localStorage.setItem('account', JSON.stringify(arrayAccount));
  var arrayGioHang = JSON.parse(localStorage.getItem('giohang'));
  arrayGioHang.push({
    name: account.username,
    arrayCart: []
  });
  localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  var arrayOrder = JSON.parse(localStorage.getItem('order'));
  arrayOrder.push({
    name: account.username,
    arrayOrder: []
  });
  localStorage.setItem('order', JSON.stringify(arrayOrder));
  alert('Đăng ký thành công');
  dongForm();
}

function hienThiThongTinKhachHang() {
  const status = localStorage.getItem('status');
  if (status == null) {
    document.querySelector('.default').style.display = 'flex';
  }
  else {
    const arrayAccount = JSON.parse(localStorage.getItem('account'));
    const elementClient = document.querySelector('.client');
    for (var i = 0; i < arrayAccount.length; ++i) {
      if (arrayAccount[i].username === status) {
        elementClient.querySelector('#clientName').innerText = arrayAccount[i].username;
        document.querySelector('.default').style.display = 'none';
        elementClient.style.display = 'flex';
        return;
      }
  }
  }
}

function tangSoLuong(event) {
  const target = event.target;
  const element = target.parentElement.querySelector('.quantity-input');
  const value = parseInt(element.value);
  element.value = (value + 1).toString();
}

function giamSoLuong(event) {
  const target = event.target;
  const element = target.parentElement.querySelector('.quantity-input');
console.log(element);
  const value = parseInt(element.value);
  element.value = (value == 1) ? '1' : (value - 1).toString();
}

function loadDuLieu() {
  createLocalStorage();
  hienThiThongTinKhachHang();
}

function hienThiTrangChu() {
	loadDuLieu();
  const duLieuSanPham = JSON.parse(localStorage.getItem('product'));
  hienThiDanhSachSanPham(duLieuSanPham, 8, 'Tất cả Xe');
}
