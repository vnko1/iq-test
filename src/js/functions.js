import { menuEl, headerEl, routes } from './constants';
import header from './views/header.js';

let testBtn = null;

export function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

  if (getPage() === 12) {
    setTimeout(() => {
      history.pushState('', '', `${location.origin}/results`);
      router();
    }, 3000);
  }

  if (
    location.pathname.includes('test') ||
    location.pathname.includes('results')
  ) {
    headerEl.innerHTML = header();
  } else {
    headerEl.innerHTML = '';
  }

  if (view || hashView) {
    renderPage(view);
    if (hashView) renderDetails(hashView);
  } else {
    renderHomePage();
  }
}

export function globalListener(e) {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState('', '', e.target.href);
    router();
  }
  if (e.target.matches('[data-details-link]')) {
    e.preventDefault();
    if (!location.hash) history.pushState('', '', '#details');
    else history.pushState('', '', '/');
    router();
  }
}

function renderDetails(view) {
  menuEl.classList.remove('is-open');
  app.insertAdjacentHTML('beforeend', view.render());
  const arrowEl = document.querySelector('.arrow-container');
  const detailsEl = document.querySelector('.details-container');

  setTimeout(() => {
    arrowEl.classList.add('rotate');
    detailsEl.classList.add('animate');
  }, 0);
}

function renderPage(view) {
  const page = getPage() || 0;
  menuEl.classList.remove('is-open');
  document.title = view.title;
  app.innerHTML = view.render(page);
  const formEl = document.querySelector('.form');
  testBtn = document.querySelector('.test-button');
  setTimer();
  if (formEl) {
    formEl.addEventListener('change', onHandleChange);
  }

  if (testBtn) {
    testBtn.addEventListener('click', onHandleClick);
  }
}

function setTimer() {
  const minutesOutput = document.querySelector('[data-minutes]');
  const secondsOutput = document.querySelector('[data-deconds]');
  console.log(minutesOutput);
}

function renderHomePage() {
  history.replaceState('', '', '/');
  router();
}

function onHandleChange(e) {
  if (e.target.value !== '') {
    testBtn.disabled = false;
  }
}

function onHandleClick() {
  const page = getPage(location.pathname);
  history.pushState('', '', `${location.origin}/test/${page + 1}`);
  router();
}

function getPage() {
  return +location.pathname.split('/').reverse()[0];
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
