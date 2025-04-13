import { layoutMain } from "./layout";
import { API } from "../modules/const";
import { renderList } from "./renderList";

let rendered = false;

export const productList = (title, data, parent) => {
  // if(remove) {
  //   console.log('remove:', document.querySelector('.goods'));
  //   document.querySelector('goods').remove();
  //   rendered = false;
  //   return '';
  // }

  if (rendered) {
    return "";
  }

  
  let goodsItem = "";

  const child = `
  <h2 class="goods__title">${title}</h2>

  <ul class="goods__list">
    ${renderList(data, goodsItem, API)}
  </ul>
`;


  const page = layoutMain(child, "product__container", "product");

  parent.append(page);

  rendered = true;

  const btnLike = () => {
    const btnLike = document.querySelectorAll('.card__like-button');
    btnLike.forEach(like => {
      like.addEventListener('click', ({target}) => {
        const likeSvg = target.closest('.card__like-svg');
        likeSvg.classList.toggle('card__like-svg--active')
      })
    });
  }

  btnLike();

  const catalogButton = document.querySelector(".catalog");
  const catalogLinks = document.querySelectorAll(".catalog__link");

  if (catalogButton) {
    catalogButton.addEventListener("click", (e) => {
      catalogLinks.forEach((link) => {
        link.classList.remove("catalog__link--active");
      });

      if (e.target.matches("a")) {
        e.target.classList.add("catalog__link--active");
      }
      

      const refreshList = data.filter(
        (item) => item.type === e.target.textContent
      );

      const list = document.querySelector(".goods__list");

      list.textContent = "";
      goodsItem = "";

      list.innerHTML = renderList(refreshList, goodsItem, API);
      btnLike();

      if (e.target.textContent === "Все") {
        goodsItem = "";
        list.innerHTML = renderList(data, goodsItem, API);
        btnLike();
      }
    });
  }

  return page;
};