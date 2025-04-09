import { layout } from "./layout"

let rendered = false;

export const breadcrumb = () => {

  if(rendered) {
    return '';
  };


  const el = document.createElement('div');
  el.classList.add('breadcrumb');
  const child = `
  <nav class="breadcrumb__navigation">
          <ul class="breadcrumb__list">
            <li class="breadcrumb__item">
              <a href="#" class="breadcrumb__link">Главная</a>
            </li>
            <li class="breadcrumb__item">
              <a href="#" class="breadcrumb__link">Лыжи</a>
            </li>
            <li class="breadcrumb__item">
              <a href="#" class="breadcrumb__link">Горные лыжи</a>
            </li>
          </ul>
        </nav>
  ` ;

  el.append(layout(child, 'breadcrumb__container'));

  rendered = true;

  return el;
}