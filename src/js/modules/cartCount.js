import { localStorageLoad, localStorageSave } from "./localstorage";

export const cartCount = () => {

  const cartList = localStorageLoad('ski-people-cart');
  const list = document.querySelector('.cart__list');
  const total = document.querySelector('.cart__order-price');
  const totalProduct = document.querySelector('.cart__order-count-num');
  const cartCount = document.querySelector('.header__link-count');
  cartCount.textContent = '(' + cartList.length + ')';
  
      if(list) {
        list.addEventListener('click', e => {
          if (e.target.closest('.counter')) {

            const idNumber = Number(e.target.closest('.cart__item')
            .querySelector('.cart__item-id')
            .textContent.replace(/[^\d]/g, ''));

            const countText = e.target.closest('.counter').querySelector('.counter__number');

            cartList.map((item, index) => {
              if(item.id === idNumber) {
                if(e.target.textContent === "+") {
                  cartList[index].count++;
                  total.textContent = cartList.reduce((sum, item) => sum + item.count * item.price, 0) + ' ' + "₽";
                }
                if(e.target.textContent === "-") {
                  cartList[index].count--;
                  total.textContent = cartList.reduce((sum, item) => sum + item.count * item.price, 0) + ' ' + "₽";
                  if(cartList[index].count <= 0) {
                    cartList.splice(index, 1);
                    totalProduct.textContent = cartList.length;
                    cartCount.textContent = '(' + cartList.length + ')';
                    e.target.closest('.cart__item').remove()
                  }
                }
                  countText.textContent = cartList[index]?.count;
              }
            });
            localStorageSave('ski-people-cart', cartList);
          };
        });
      };
}