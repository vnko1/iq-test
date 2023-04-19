import home from './views/home.js';
import details from './views/details.js';
import { headerTest } from './views/headerTest.js';
import { page1 } from './views/tests.js';
// import about from './views/about.js';
// import contact from './views/contact.js';

const menuEl = document.querySelector('.menu-container');
const headerEl = document.getElementById('header-container');

const routes = {
  '/': { title: 'Home', render: home },
  '#details': { title: 'details', render: details },
  '/test/1': { title: 'Test', render: page1 },
  // '/contact': { title: 'Contact', render: contact },
};

async function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];
  if (location.pathname.includes('test')) {
    headerEl.innerHTML = headerTest();
  } else {
    headerEl.innerHTML = '';
  }

  if (view || hashView) {
    menuEl.classList.remove('is-open');
    document.title = view.title;
    app.innerHTML = view.render();

    if (hashView?.title === 'details') {
      menuEl.classList.remove('is-open');
      await app.insertAdjacentHTML('beforeend', hashView.render());
      const arrowEl = document.querySelector('.arrow-container');
      const detailsEl = document.querySelector('.details-container');

      setTimeout(() => arrowEl.classList.add('rotate'), 0);
      setTimeout(() => detailsEl.classList.add('animate'), 0);
    }
  } else {
    history.replaceState('', '', '/');
    router();
  }
}

window.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.matches('[data-link]')) {
    history.pushState('', '', e.target.href);
    router();
  }
  if (e.target.matches('[data-details-link]')) {
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
