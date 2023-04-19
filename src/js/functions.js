import { menuEl, headerEl, routes } from './constants';
import { headerTest } from './views/headerTest.js';

let testBtn = null;

export function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

  if (location.pathname.includes('test')) {
    headerEl.innerHTML = headerTest();
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

  setTimeout(() => arrowEl.classList.add('rotate'), 0);
  setTimeout(() => detailsEl.classList.add('animate'), 0);
}

function renderPage(view) {
  const page = getPage() || 0;
  menuEl.classList.remove('is-open');
  document.title = view.title;
  app.innerHTML = view.render(page);
  const formEl = document.querySelector('.form');
  testBtn = document.querySelector('.test-button');

  if (formEl) {
    formEl.addEventListener('change', onHandleChange);
  }

  if (testBtn) {
    testBtn.addEventListener('click', onHandleClick);
  }
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
