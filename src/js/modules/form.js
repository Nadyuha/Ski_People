import { router } from "./router";
import { localStorageSave } from "./localstorage";

export const form = () => {
  const formOrder = document.querySelector(".cart__form");
  const total = document.querySelector('.cart__order-price');
  if (formOrder) {
    formOrder.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(formOrder));
      formData.total = total.textContent;
      formData.idOrder = Math.floor(new Date().valueOf() * Math.random())
      localStorageSave("ski-people-order", formData);
      router.navigate('/order');
    });
  }
};
