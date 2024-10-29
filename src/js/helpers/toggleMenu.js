const toggleMenu = (activatorClass, menuClass) => {
  const activator = document.querySelector('.' + activatorClass);
  const menu = document.querySelector('.' + menuClass);

  activator.addEventListener('click', () => {
    menu.classList.toggle(`${menuClass}--active`);
    activator.classList.toggle(`${activatorClass}--active`);
    activator.setAttribute('aria-expanded', 'true');
  });
};

export default toggleMenu;
