import { localStorageLoad, localStorageSave } from "./localstorage";

export const addFavorite = async (data) => {
  const favoriteList = localStorageLoad('ski-people-favorite');
  const list = document.querySelector('.goods__list');


    if(list) {
      list.addEventListener('click', ({target}) => {
        const likeBtn = target.closest('.card__like-button');
        if(likeBtn) {
          const id = Number(likeBtn.dataset.id);
          const item = data.find(item => item.id === id);
          console.log(item);

          if(favoriteList.length === 0) {
            favoriteList.push(item);
            localStorageSave('ski-people-favorite', favoriteList);
          } else {
            let filled = false;
            favoriteList.forEach((favoriteItem, index) => {
              if(favoriteItem.id === id) {
                filled = true;
                favoriteList.splice(index, 1);
                localStorageSave('ski-people-favorite', favoriteList);
              }
            });
            if(!filled) {
              favoriteList.push(item);
              localStorageSave('ski-people-favorite', favoriteList);
            }
          }
        }
      });
    };
};