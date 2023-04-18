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

function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

  if (view || hashView) {
    menuEl.classList.remove('is-open');
    document.title = view.title;
    app.innerHTML = view.render();

    if (hashView?.title === 'details') {
      menuEl.classList.remove('is-open');
      app.insertAdjacentHTML('beforeend', hashView.render());
      return;
    }
  } else {
    history.replaceState('', '', '/');
    router();
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

      router();
    } else {
      history.pushState('', '', '/');
      router();
    }
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
