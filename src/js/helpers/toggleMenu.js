/**
 * @function toggleMenu
 * @description Toggle a menu on click on the menu activator.
 * @param {string} activatorClass - The class of the element that will activate the menu.
 * @param {string} menuClass - The class of the element that will be toggled.
 * @example
 * toggleMenu('hamburger', 'nav');
 */
const toggleMenu = (activatorClass, menuClass) => {
  const activator = document.querySelector('.' + activatorClass);
  const menu = document.querySelector('.' + menuClass);

  activator.addEventListener('click', () => {
    menu.classList.toggle(`${menuClass}--active`);
    activator.classList.toggle(`${activatorClass}--active`);
    activator.setAttribute('aria-expanded', menu.classList.contains(`${menuClass}--active`));
  });
};

export default toggleMenu;
