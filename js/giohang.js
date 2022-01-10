function hienThiGia(price) {
  var string = "0";
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

function dangXuat() {
  localStorage.removeItem('status');
  location.assign('./index.html');
}

function chuyenTrangChu() {
  location.assign('./index.html');
}

function kiemTraNguoiDung() {
  if (localStorage.getItem('status') == null) {
    chuyenTrangChu();
  }
}

function hienThiNguoiDung() {
  const arrayAccount = JSON.parse(localStorage.getItem('account'));
  for (var i = 0; i < arrayAccount.length; ++i) {
    if (arrayAccount[i].username === localStorage.getItem('status')) {
      document.querySelector('#clientName').innerText = arrayAccount[i].username;
      return;
    }
  }
}

function hienThiDanhSachSanPham() {
  const arrayProduct = JSON.parse(localStorage.getItem('product'));
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));
  const elementHienThiDanhSach = document.querySelector('.cart__body-item-content');
  const elementTongTien = document.querySelector('.cart__body-pay-totalprice');
  const dataStatus = localStorage.getItem('status');
  var gioHang;

  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === dataStatus) {
      gioHang = arrayGioHang[i];
      break;
    }
  }

  var tongTien = 0;
  var stringHTML = '';
  for (var i = 0; i < gioHang.arrayCart.length; ++i) {
    for (var j = 0; j < arrayProduct.length; ++j) {
      if (arrayProduct[j].id === gioHang.arrayCart[i].id) {
        stringHTML += `
                        <div class="cart__body-item-detail">
                          <div class="item-detail">
                            <div class="item-img">
                              <img src="${arrayProduct[j].image}">
                            </div>
                            <div class="item-name">
                              ${arrayProduct[j].name + '- size: ' + arrayProduct[j].size} 
                            </div>
                          </div>
                          <div class="item-price">
                            ${hienThiGia(arrayProduct[j].price)}
                          </div>
                          <div class="item-quantity">
                            <button class="qty-down" onClick="giamSoLuong(${arrayProduct[j].id})">-</button>
                            <input type"number" class="qty-input" value="${gioHang.arrayCart[i].quantity}">
                            <button class="qty-up" onClick="tangSoLuong(${arrayProduct[j].id})">+</button>
                          </div>
                          <div class="item-totalPrice">
                            ${hienThiGia(arrayProduct[j].price * gioHang.arrayCart[i].quantity)}
                          </div>
                          <div class="item-detele">
                            <span onClick = "xoaSanPham(${arrayProduct[j].id})">Xoá</span>
                          </div>
                        </div>
                    `;
        tongTien += arrayProduct[j].price * gioHang.arrayCart[i].quantity;
        break;
      }
    }
  }

  elementHienThiDanhSach.innerHTML = stringHTML;
  elementTongTien.innerText = hienThiGia(tongTien);
}

function xoaSanPham(id) {
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));

  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === localStorage.getItem('status')) {
      const gioHang = arrayGioHang[i];
      var arraySanPham = [];
      for (var j = 0; j < gioHang.arrayCart.length; ++j) {
        if (gioHang.arrayCart[j].id !== id) {
          arraySanPham.push(gioHang.arrayCart[j]);
        }
      }
      arrayGioHang[i].arrayCart = arraySanPham;
    }
  }

  localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  hienThiDanhSachSanPham();
}


function xoaTatCaSanPham() {
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));

  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === localStorage.getItem('status')) {
      arrayGioHang[i].arrayCart = [];
      break;
    }
  }

  localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  hienThiDanhSachSanPham();
}

function tangSoLuong(id) {
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));

  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === localStorage.getItem('status')) {
      var gioHang = arrayGioHang[i];
      for (var j = 0; j < gioHang.arrayCart.length; ++j) {
        if (gioHang.arrayCart[j].id === id) {
          gioHang.arrayCart[j].quantity += 1;
          break;
        }
      }
      arrayGioHang[i] = gioHang;
      break;
    }
  }

  localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  hienThiDanhSachSanPham();
}

function giamSoLuong(id) {
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));

  for (var i = 0; i < arrayGioHang.length; ++i) {
    if (arrayGioHang[i].name === localStorage.getItem('status')) {
      var gioHang = arrayGioHang[i];
      for (var j = 0; j < gioHang.arrayCart.length; ++j) {
        if (gioHang.arrayCart[j].id === id) {
          if (gioHang.arrayCart[j].quantity === 1) {
            xoaSanPham(id);
            return;
          }
          gioHang.arrayCart[j].quantity -= 1;
          break;
        }
      }
      arrayGioHang[i] = gioHang;
      break;
    }
  }

  localStorage.setItem('giohang', JSON.stringify(arrayGioHang));
  hienThiDanhSachSanPham();
}


function hienThiDonHang() {
  const arrayOrder = JSON.parse(localStorage.getItem('order'));
  const elementHienThiDonHang = document.querySelector('.order__item');
  var stringHTML = '';

  for (var i = 0; i < arrayOrder.length; ++i) {
    if (arrayOrder[i].name === localStorage.getItem('status')) {
      const duLieuOrder = arrayOrder[i];
      for (var j = 0; j < duLieuOrder.arrayOrder.length; ++j) {
        const order = duLieuOrder.arrayOrder[j];
        stringHTML += `
                      <div class="order__item-content">
                        <div class="order__item-stt">
                          ${j + 1}
                        </div>
                        <div class="order__item-name">
                          ${order.info}
                        </div>
                        <div class="order__item-totalPrice">
                          ${hienThiGia(order.price)}
                        </div>
                        <div class="order__item-date">
                          ${order.date}
                        </div>
                        <div class="order__item-status">
                          ${order.status}
                        </div>
                      </div>
                    `;
      }
      break;
    }
  }

  elementHienThiDonHang.innerHTML = stringHTML;
}

function datHang() {
  const arrayGioHang = JSON.parse(localStorage.getItem('giohang'));
  const arrayProduct = JSON.parse(localStorage.getItem('product'));
  var info = '';
  var tongTien = 0;

  for (var i = 0; i < arrayGioHang.length; ++i) {
      if (arrayGioHang[i].name === localStorage.getItem('status')) {
          var gioHang = arrayGioHang[i];
          if (gioHang.arrayCart.length === 0) {
              return;
          }
          for (var j = 0; j < gioHang.arrayCart.length; ++j) {
              var Cart = gioHang.arrayCart[j];
              for (var z = 0; z < arrayProduct.length; ++z) {
                  if (arrayProduct[z].id === Cart.id) {
                      info += arrayProduct[z].name + arrayProduct[z].size + '- sl: ' + Cart.quantity + '|  ';
                      tongTien += arrayProduct[z].price * Cart.quantity;
                      break;
                  }
              }
          }
          break;
      }
  }
  const d = new Date();
  var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
  const arrayOrderCustomer = JSON.parse(localStorage.getItem('order'));
  const order = {
      info: info,
      price: tongTien,
      date: date,
      status: 'Đang giao hàng'
  };
  for (var i = 0; i < arrayOrderCustomer.length; ++i) {
      if (arrayOrderCustomer[i].name === localStorage.getItem('status')) {
          arrayOrderCustomer[i].arrayOrder.push(order);
          break;
      }
  }

  localStorage.setItem('order', JSON.stringify(arrayOrderCustomer));
  xoaTatCaSanPham();
  hienThiDonHang();
  alert('Dặt hàng thành công!');
}

function hienThiTrangGioHang() {
  kiemTraNguoiDung();
  hienThiNguoiDung();
  hienThiDanhSachSanPham();
  hienThiDonHang();
}