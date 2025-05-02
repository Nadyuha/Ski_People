import { layoutMain } from "./layout";
import { localStorageLoad } from "../modules/localstorage";
import { API } from "../modules/const";


let rendered = false;


export const cart = (title, parent, data, id) => {

  if (title === "remove") {
    document.querySelector(".cart").remove();
    rendered = false;
    return "";
  }

  if(rendered) {
    return '';
  };

  const cartList = localStorageLoad('ski-people-cart');

  let goodsItem = '';

  const totalSum = cartList.reduce((sum, item) => sum + item.count * item.price, 0);

  const render = (data, result) => {
    if(data) {
      data.forEach(goods => {
        //let inCart = cartList.find(item => item.id === id);
        result += `
        
          <li class="cart__item">
                <img   src="${API}/img/${goods.mainImage !== undefined ? goods.mainImage[0] : ""}"
                  alt="${goods.name}"
                  class="cart__item-image" />
                
                <h3 class="cart__item-title">${goods.name}</h3>
                <div class="cart__item-price">${goods.price}&nbsp;₽</div>
                <p class="cart__item-id">арт.&nbsp;${goods.id}</p>
  
                <div class="cart__item-counter counter">
                  <button class="counter__minus" type="button" aria-label="Кнопка уменьшения количества товара">-</button>
                  <p class="counter__number">${goods.count}</p>
                  <button class="counter__plus" type="button" aria-label="Кнопка увеличения количества товара">+</button>
                </div>
  
              </li>
            `
      });
      return result;
    }
    }
    


  const child = `
       <h2 class="cart__title">${title}</h2>

       <div class="cart__wrapper">

          <ul class="cart__list">
          ${render(cartList, goodsItem)}
          </ul>

          <div class="cart__order">

            <h3 class="cart__order-title">Оформление</h3>

            <div class="cart__order-info">

              <p class="cart__order-count">
                <span class="cart__order-count-num">${cartList.length}</span>
                товара на сумму:
              </p>

              <p class="cart__order-price" id="total-price">${totalSum}&nbsp;₽</p>

            </div>

            <p class="cart__order-delivery">
              Доставка 0 ₽
            </p>

            <button class="cart__order-button" type="submit" form="cartForm">Оформить&nbsp;заказ</button>

          </div>

          <form action="#" class="cart__form" id="cartForm" method="POST">
            
            <h3 class="cart__form-title">Данные для доставки</h3>

            <fieldset class="cart__form-inputs">

              <input type="text" name="name" class="cart__form-input" placeholder="Фамилия Имя Отчество">

              <input type="tel" name="tel" class="cart__form-input" placeholder="Телефон">

              <input type="email" name="email" class="cart__form-input" placeholder="E-mail">

              <input type="text" name="address" class="cart__form-input" placeholder="Адрес доставки">

              <textarea name="comment" id="comment" class="cart__form-input cart__form-input-textarea" placeholder="Комментарий к заказу"></textarea>

            </fieldset>

            <fieldset class="cart__form-fieldset">

              <legend class="cart__form-legend">Доставка</legend>

              <label class="cart__form-label">
                <input class="cart__form-radio" type="radio" value="delivery" name="delivery">
                Доставка
              </label>

              <label class="cart__form-label">
                <input class="cart__form-radio" type="radio" value="pickup" name="delivery">
                Самовывоз
              </label>

            </fieldset>

            <fieldset class="cart__form-fieldset">

              <legend class="cart__form-legend">Оплата</legend>

              <label class="cart__form-label">
                <input class="cart__form-radio" type="radio" value="card" name="payment">
                Картой при получении
              </label>

              <label class="cart__form-label">
                <input class="cart__form-radio" type="radio" value="cash" name="payment">
                Наличными при получении
              </label>

            </fieldset>

          </form>
          </div>
  `;

  const page = layoutMain(child, "cart__container", "cart");

  parent.append(page) 

  rendered = true;
  
  return page;
};
