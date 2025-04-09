let rendered = false;

export const main = (...childs) => {

  if(rendered) {
    return document.querySelector('main');
  }

  const el = document.createElement('main');
  for(const child of childs) {
    el.append(child)
  }
  document.body.append(el);

  rendered = true;

  return el;
};