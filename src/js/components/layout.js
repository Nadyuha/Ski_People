export const layout = (child, classList) => {
  const el = document.createElement('div');
  el.classList.add('container');
  if(classList) {
    el.classList.add(classList);
  }

  el.innerHTML = child;

  return el;
}

export const layoutMain = (child, classList, classListSection) => {
  const section = document.createElement('section');
  section.classList.add(classListSection);
  const el = document.createElement('div');

    el.classList.add('container');
    if(classList) {
      el.classList.add(classList);
    }

    el.innerHTML = child;

    section.append(el);

  return section;
}
