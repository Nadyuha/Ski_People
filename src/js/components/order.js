import { layoutMain } from "./layout";
import { main } from "./mainSection";

let rendered = false;

export const order = () => {

  if(rendered) {
    return '';
  };

  const child = `
 <div class="order__container-content">

<div class="order__block">

  <h3 class="order__block-title">Заказ успешно размещен</h3>

  <p class="order__block-price">20&nbsp;000&nbsp;₽</p>

</div>

<p class="order__number">№43435</p>

<h3 class="order__describe">Данные доставки</h3>

<table class="order__table">
  <tr class="order__table-row">
    <td class="order__table-item">Получатель</td>
    <td class="order__table-item">Иванов Петр Александрович</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Телефон</td>
    <td class="order__table-item">+7 (737) 346 23 00</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">E-mail</td>
    <td class="order__table-item">Ivanov84@gmail.com</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Адрес доставки</td>
    <td class="order__table-item">Москва, ул. Ленина, 21, кв. 33</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Способ оплаты</td>
    <td class="order__table-item">Картой при получении</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Способ получения</td>
    <td class="order__table-item">Доставка</td>
  </tr>
</table>

<a href="#" class="order__button" type="button" aria-label="Ссылка возвращения на главную страницу">На главную</a>
  `;

  const page = layoutMain(child, "order__container", "order");

  rendered = true;

  return main(page);
};


