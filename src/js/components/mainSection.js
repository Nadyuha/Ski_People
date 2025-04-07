export const main = (...childs) => {
  const el = document.createElement('main');
  for(const child of childs) {
    el.append(child)
  }
  return el;
};