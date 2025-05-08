import { layoutMain } from "./layout";
import { localStorageLoad } from "../modules/localstorage";

let rendered = false;

export const order = (title, parent) => {
  const orderDate = localStorageLoad("ski-people-order");
  console.log(orderDate);

  if (title === "remove") {
    document.querySelector(".order").remove();
    rendered = false;
    return "";
  }

  if(rendered) {
    return '';
  };

  const child = `
 <div class="order__container-content">

<div class="order__block">

  <h3 class="order__block-title">Заказ успешно размещен</h3>

  <p class="order__block-price">${orderDate.total}</p>

</div>

<p class="order__number">№${orderDate.idOrder}</p>

<h3 class="order__describe">Данные доставки</h3>

<table class="order__table">
  <tr class="order__table-row">
    <td class="order__table-item">Получатель</td>
    <td class="order__table-item">${orderDate.name}</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Телефон</td>
    <td class="order__table-item">${orderDate.tel}</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">E-mail</td>
    <td class="order__table-item">${orderDate.email}</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Адрес доставки</td>
    <td class="order__table-item">${orderDate.address}</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Способ оплаты</td>
    <td class="order__table-item">${orderDate.payment === "card" ? "Картой при получении" : "Наличные при получении"}</td>
  </tr>

  <tr class="order__table-row">
    <td class="order__table-item">Способ получения</td>
    <td class="order__table-item">${orderDate.delivery === "delivery" ? "Доставка" : "Самовывоз"}</td>
  </tr>
</table>

<a href="/" class="order__button" type="button" aria-label="Ссылка возвращения на главную страницу">На главную</a>
  `;

    const page = layoutMain(child, "order__container", "order");
 
  
    parent.append(page) 
  
    rendered = true;

      const buttonOrder = document.querySelector('.order__button');
      
      buttonOrder.addEventListener('click', () => {
        localStorage.removeItem("ski-people-order");
        localStorage.removeItem("ski-people-cart");
      });
      
    return page;
};


