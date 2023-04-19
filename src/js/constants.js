import home from './views/home.js';
import details from './views/details.js';
import tests from './views/tests.js';

const menuEl = document.querySelector('.menu-container');
const headerEl = document.getElementById('header-container');
let testBtn = null;

const routes = {
  '/': { title: 'Home', render: home },
  '#details': { title: 'details', render: details },
  '/test/1': { title: 'Test', render: tests },
  '/test/2': { title: 'Test', render: tests },
  '/test/3': { title: 'Test', render: tests },
  '/test/4': { title: 'Test', render: tests },
  '/test/5': { title: 'Test', render: tests },
  '/test/6': { title: 'Test', render: tests },
  '/test/7': { title: 'Test', render: tests },
  '/test/8': { title: 'Test', render: tests },
  '/test/9': { title: 'Test', render: tests },
  '/test/10': { title: 'Test', render: tests },
  '/test/11': { title: 'Test', render: tests },
};

export { menuEl, headerEl, routes };