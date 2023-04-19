import home from './views/home.js';
import details from './views/details.js';
import start from './views/start.js';
// import about from './views/about.js';
// import contact from './views/contact.js';

const menuEl = document.querySelector('.menu-container');

const routes = {
  '/': { title: 'Home', render: home },
  '#details': { title: 'details', render: details },
  '/start': { title: 'Test', render: start },
  // '/contact': { title: 'Contact', render: contact },
};

async function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

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
      // return;
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
      // router();
    } else {
      history.pushState('', '', '/');
      // router();
    }
    router();
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
