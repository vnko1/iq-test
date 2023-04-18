import home from './views/home.js';
import details from './views/details.js';
// import about from './views/about.js';
// import contact from './views/contact.js';

const routes = {
  '/': { title: 'Home', render: home },
  '#details': { title: 'details', render: details },
  // '/about': { title: 'About', render: about },
  // '/contact': { title: 'Contact', render: contact },
};

function router() {
  const view = routes[location.pathname];
  const hashView = routes[location.hash];

  if (view || hashView) {
    document.title = view.title;
    app.innerHTML = view.render();
    if (hashView?.title === 'details') {
      app.insertAdjacentHTML('beforeend', hashView.render());
      return;
    }
  } else {
    history.replaceState('', '', '/');
    router();
  }
}

// Handle navigation
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

// Update router
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
