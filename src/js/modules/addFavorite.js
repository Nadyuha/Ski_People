import { localStorageLoad, localStorageSave } from "./localstorage";

export const addFavorite = async (data) => {
  const favoriteList = localStorageLoad('ski-people-favorite');
  const list = document.querySelector('.goods__list');
    if(list) {
      list.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.card__like-button');
        if(likeBtn) {
          const id = Number(likeBtn.dataset.id);

          const likeSvg = likeBtn.querySelector('.card__like-svg');

          const item = data.find((item) => item.id === id);

          likeSvg.classList.toggle('card__like-svg--active');

          if(favoriteList.length === 0 && item !== null) {
            favoriteList.push(item);
            localStorageSave('ski-people-favorite', favoriteList);
          } else {
            let thereIs = false;
            favoriteList.forEach((favoriteItem, index) => {
              if(favoriteItem.id === id) {
                thereIs = true;
                favoriteList.splice(index, 1);
                localStorageSave('ski-people-favorite', favoriteList);
              }
            });
            if(!thereIs) {
              favoriteList.push(item);
              localStorageSave('ski-people-favorite', favoriteList);
            }
          }
        }
      });
    };
};