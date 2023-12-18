export const setBodyScroll = (enable: boolean): void => {
  if (enable) {
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
  }
};

export const setScrollBarWidth = (): void => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  document.documentElement.style.setProperty('--scrollbar-compensation', `${scrollBarWidth}px`);
};
