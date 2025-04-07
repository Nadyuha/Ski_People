import { layoutMain } from "./layout";
import { main } from "./mainSection";


export const cart = () => {
  const child = `
       <h2 class="cart__title">Корзина</h2>

          <ul class="cart__list">

            <li class="cart__item">
              <img src="/img/ski__cart.png" alt="Горные лыжи" class="cart__item-image" />
              <h3 class="cart__item-title">Горные лыжи</h3>
              <div class="cart__item-price">5&nbsp;000&nbsp;₽</div>
              <p class="cart__item-id">арт.&nbsp;84348945757</p>

              <div class="cart__item-counter counter">
                <button class="counter__minus" type="button" aria-label="Кнопка уменьшения количества товара">-</button>
                <p class="counter__number">1</p>
                <button class="counter__plus" type="button" aria-label="Кнопка увеличения количества товара">+</button>
              </div>

            </li>

          </ul>

          <div class="cart__order">

            <h3 class="cart__order-title">Оформление</h3>

            <div class="cart__order-info">

              <p class="cart__order-count">
                <span class="cart__order-count-num">4</span>
                товара на сумму:
              </p>

              <p class="cart__order-price">20&nbsp;000&nbsp;₽</p>

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

              <textarea name="comment" id="comment" placeholder="Комментарий к заказу"></textarea>

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
  `;

  const page = layoutMain(child, "cart__container", "cart");

  return main(page);
};
