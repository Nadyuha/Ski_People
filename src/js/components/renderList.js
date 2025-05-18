import { localStorageLoad } from "../modules/localstorage";
const favoriteList = localStorageLoad('ski-people-favorite');


export function renderList (data, list, API, favoriteList, cartList) {
  if(data || favoriteList) {
    data.forEach(goods => {
      let inCart;
      if(cartList) {
        inCart = cartList.find(item => item.id === goods.id)
      }

      list += `
      <li class="goods__item">
        <article class="goods__card card">
          <a href="/product?id=${goods.id}" class="card__link">
            <img
              src="${API}/img/${goods.mainImage !== undefined ? goods.mainImage[0] : ""}"
              alt="${goods.name}"
              class="card__image"
            />
          </a>
          <button
            class="card__like-button"
            type="button"
            aria-label="Кнопка добавления в избранное"
            data-id=${goods.id}
          >
            <svg
              class="card__like-svg ${favoriteList.find(item => item.id === goods.id) ? "card__like-svg--active" : ""}"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="card__describe">
            <h3 class="card__describe-title">${goods.name}</h3>
            <p class="card__describe-price">${goods.price}&nbsp;₽</p>
          </div>
          <button
            class="card__button ${inCart ? 'disabled-btn' : ''}"
            type="button"
            aria-label="Добавление товара в корзину"
            
          >
           ${inCart ? 'Уже в корзине' : 'В козину'} 
          </button>
        </article>
      </li>
      `
    });
    return list;
  }
  

  return;
}