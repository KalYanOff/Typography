const burger = document?.querySelector('.header__burger');
const nav = document?.querySelector('.header__menu');

burger?.addEventListener('click', () => {
  nav.classList.toggle('header__menu--active')
});

const play = document?.querySelector('.about__player-btn');
const video = document?.querySelector('.about__player-video');

play?.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  play.setAttribute ('hidden', true);
});