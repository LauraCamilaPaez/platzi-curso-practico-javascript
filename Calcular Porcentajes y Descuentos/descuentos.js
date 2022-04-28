const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

const coupons = [
  "Cupon_del_día_de_la_madre",
  "Cupon_del_día_del_padre",
  "Cupon_del_día_el_niño"
];

// function calcularPrecioConDescuentoYCupon(precio, descuento, coupon) {
//   const porcentajePrecioConDescuento = 100 - descuento;
//   const cupon = coupon;
//   const precioConDescuentoYCupon =
//     (precio * porcentajePrecioConDescuento) / 100 - cupon;

//   return precioConDescuentoYCupon;
// }

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
      case coupons[0]:
        descuento = 15;
        break;
      case coupons[1]:
        descuento = 30;
        break;
      case coupons[2]:
        descuento = 45;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );
    const resultP = document.getElementById("resultP");
    resultP.innerText =
      "El precio con descuento de tu producto es: $ " + precioConDescuento;
  }