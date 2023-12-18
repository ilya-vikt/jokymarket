export const setBodyScroll = (enable: boolean): void => {
  if (enable) {
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
  }
};
