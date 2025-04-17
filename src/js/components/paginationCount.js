export const paginationCount = (data) => {
  const buttons = document.querySelectorAll(".count-text__button");

  const maxCount = data.length;

  let currentCount = 0;

  const paginationActiveElements = (index) => {
    const paginationElements = document.querySelectorAll(".pagination__item");

    paginationElements.forEach((item) => {
      item.classList.remove("pagination__item--active");
    });

    paginationElements[index].classList.add("pagination__item--active");
  };

  buttons[0].addEventListener("click", (e) => {
    if (currentCount > 0 && currentCount <= maxCount) {
      currentCount--;
      paginationActiveElements(currentCount);
    }
  });

  buttons[1].addEventListener("click", (e) => {
    if (currentCount >= 0 && currentCount < maxCount - 1) {
      currentCount++;
      paginationActiveElements(currentCount);
    }
  });
};
