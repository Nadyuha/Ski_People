import { layoutMain } from "./layout";
import { API } from "../modules/const";
import { renderList } from "./renderList";
import { localStorageLoad } from "../modules/localstorage";

let rendered = false;

export const productList = (title, data, parent) => {
  // const btnLike = () => {
  //   const btnLike = document.querySelectorAll('.card__like-button');
    
  //   btnLike.forEach(like => {
  //     console.log(like);
  //     like.addEventListener('click', ({target}) => {
  //       console.log(like);
  //       const likeSvg = target.closest('.card__like-svg');
  //       likeSvg.classList.toggle('card__like-svg--active')
  //     })
  //   });
  // }

  

  if (title === "remove") {
    document.querySelector(".goods").remove();
    rendered = false;
    return "";
  }

  if (rendered) {
    return "";
  }
  
  let goodsItem = "";
  const favoriteList = localStorageLoad("ski-people-favorite");

  const child = `
  <h2 class="goods__title">${title}</h2>

  <ul class="goods__list">
    ${renderList(data, goodsItem, API, favoriteList)}
  </ul>
`;

  const page = layoutMain(child, "goods__container", "goods");

  parent.append(page);

  rendered = true;

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
      const updatedFavoriteList = localStorageLoad("ski-people-favorite");

      list.innerHTML = renderList(
        refreshList,
        goodsItem,
        API,
        updatedFavoriteList
      );

      if (e.target.textContent === "Все") {
        goodsItem = "";
        list.innerHTML = renderList(data, goodsItem, API, updatedFavoriteList);
      }
    });
  }

  return page;
};