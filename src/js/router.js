import home from './views/home.js';
import details from './views/details.js';
import { headerTest } from './views/headerTest.js';
import { tests } from './views/tests.js';
// import about from './views/about.js';
// import contact from './views/contact.js';

const menuEl = document.querySelector('.menu-container');
const headerEl = document.getElementById('header-container');
let testBtn = null;

const routes = {
  '/': { title: 'Home', render: home },
  '/test/1': { title: 'Test', render: tests },
  '/test/2': { title: 'Test', render: tests },
  '#details': { title: 'details', render: details },
  // '/contact': { title: 'Contact', render: contact },
};

function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

  if (location.pathname.includes('test')) {
    headerEl.innerHTML = headerTest();
  } else {
    headerEl.innerHTML = '';
  }

  if (view || hashView) {
    renderPage(view, location.pathname);
    if (hashView) renderDetails(hashView);
  } else {
    renderHomePage();
  }
}

window.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();

    history.pushState('', '', e.target.href);
    router();
  }
  if (e.target.matches('[data-details-link]')) {
    e.preventDefault();
    if (!location.hash) {
      history.pushState('', '', '#details');
    } else {
      history.pushState('', '', '/');
    }
    router();
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

async function renderDetails(view) {
  menuEl.classList.remove('is-open');
  await app.insertAdjacentHTML('beforeend', view.render());
  const arrowEl = document.querySelector('.arrow-container');
  const detailsEl = document.querySelector('.details-container');

  setTimeout(() => arrowEl.classList.add('rotate'), 0);
  setTimeout(() => detailsEl.classList.add('animate'), 0);
}

function renderPage(view, path) {
  const page = parseInt(path[path.length - 1]) || 0;
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

function onHandleClick(e) {
  const page = parseInt(location.pathname[location.pathname.length - 1]);
  history.pushState('', '', `${location.origin}/test/${page + 1}`);
  router();
}
