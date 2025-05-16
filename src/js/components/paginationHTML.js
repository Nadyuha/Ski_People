import { layout } from "./layout";

let rendered = false;

export const paginationHTML = (action, parent, data, pagination) => {

    const maxPagination = data?.flat(Infinity).length;

    const currentPagination = (data, currentCount) => data.slice(0, currentCount + 1).reduce((acc, item) => acc + item.length, 0);


  if (action === "remove") {
    document.querySelector(".pagination").remove();
    rendered = false;
    return "";
  }

  if (rendered) {
    return "";
  }


  const listItems = data.map((item) => `<li class="pagination__item"></li>`).join("");

  const el = document.createElement("div");
  el.classList.add("pagination");

  const child = `
  <ul class="pagination__list">
    ${listItems}
  </ul>
  <div class="pagination__count count">
    <button class="count-text__button" type="button">&lt;</button>
    <p class="count-text__text">${currentPagination(data, Number(pagination))} из ${maxPagination}</p>
    <button class="count-text__button" type="button">&gt;</button>
  </div>
  `;

  el.append(layout(child, "pagination__container"));

  parent.append(el);

  if(pagination !== undefined) {
    document.querySelectorAll(".pagination__item")[pagination].classList.add("pagination__item--active");
  } else {
    document.querySelector(".pagination").classList.add("visually-hidden");
  }
  
  rendered = true;

  return el;
};






