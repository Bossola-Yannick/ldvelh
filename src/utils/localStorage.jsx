//  * Ceci est le getteur et setteur pour pouvoir faire appel aux valeur dans le localStorage

export function setItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function getItem(key) {
  try {
    const item = window.localStorage.getItem(key);
    if (item === null || item === undefined) return 0;
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
    return 0;
  }
}
