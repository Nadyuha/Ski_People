import { localStorageLoad, localStorageSave } from "./localstorage";

export const addCart = async (data) => {
  const cartList = localStorageLoad("ski-people-cart");
  const list = document.querySelector(".goods__list");
  const cartCount = document.querySelector(".header__link-count");

  if (list) {
    list.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card) {
        const id = Number(card.querySelector(".card__like-button").dataset.id);

        const item = data.flat(Infinity).find((item) => item.id === id);

        item.count = 1;

        if (e.target.closest(".card__button")) {
          e.target.closest(".card__button").classList.add("disabled-btn");
          e.target.closest(".card__button").textContent = "Уже в корзине";

          if (cartList.length === 0) {
            cartList.push(item);
            cartCount.textContent = "(" + cartList.length + ")";
            localStorageSave("ski-people-cart", cartList);
          } else {
            let thereIs = false;
            cartList.forEach((cartItem, index) => {
              if (cartItem.id === id) {
                thereIs = true;
                cartList.splice(1, index);
                localStorageSave("ski-people-cart", cartList);
              }
            });
            if (!thereIs) {
              cartList.push(item);
              cartCount.textContent = "(" + cartList.length + ")";
              localStorageSave("ski-people-cart", cartList);
            }
          }
          return;
        }
      }
    });
  }
};