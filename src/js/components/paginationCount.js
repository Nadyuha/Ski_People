import { router } from "../modules/router";
import { productList } from "./productList";

export const paginationCount = (data, currentCount = 0) => {

  //const buttons = document.querySelectorAll(".count-text__button");

  const maxPagination = data?.flat(Infinity).length;

  const currentPagination = (data, currentCount) => data.slice(0, currentCount + 1).reduce((acc, item) => acc + item.length, 0);

  const buttons = document.querySelector(".pagination__count");

  const maxCount = data ? data.length : 0;

  // let currentCount = 0;

  const paginationActiveElements = (index) => {
    const paginationElements = document.querySelectorAll(".pagination__item");

    paginationElements.forEach((item) => {
      item.classList.remove("pagination__item--active");
    });

    paginationElements[index].classList.add("pagination__item--active");
  };

  function changePagination ({target}) {
    if(target.matches('button')) {
      if(target.textContent == "<") {
        if (currentCount > 0 && currentCount <= maxCount) {
          currentCount--;
          paginationActiveElements(currentCount);
        } else {
          return;
        }
      } 
      if(target.textContent == ">") {
        if (currentCount >= 0 && currentCount < maxCount - 1) {
          currentCount++;
          paginationActiveElements(currentCount);
        } else {
          return;
        }
      } 
    }
    productList('remove');
    paginationActiveElements(currentCount);
    router.navigate(`/?pagination=${currentCount}`);
    document.querySelector('.count-text__text').textContent = `${currentPagination(data, Number(currentCount))} из ${maxPagination}`
    buttons.removeEventListener("click", changePagination);
  }

//   if(buttons[0]) {
//     buttons[0].addEventListener("click", (e) => {
//       if (currentCount > 0 && currentCount <= maxCount) {
//         currentCount--;
//         paginationActiveElements(currentCount);
//       }
//     });
//   }


//   if(buttons[1]) {
//     buttons[1].addEventListener("click", (e) => {
//       if (currentCount >= 0 && currentCount < maxCount - 1) {
//         currentCount++;
//         paginationActiveElements(currentCount);
//       }
//     });
// };

  buttons.addEventListener("click", changePagination);
}

