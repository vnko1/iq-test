import home from './views/home.js';
import details from './views/details.js';
import {
  loader,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
} from './views/tests.js';
import results from './views/results.js';

const menuEl = document.querySelector('.menu-container');
const headerEl = document.getElementById('header-container');

const routes = {
  '/': { title: 'Home', render: home },
  '#details': { title: 'details', render: details },
  '/test/1': { title: 'Test', render: page1 },
  '/test/2': { title: 'Test', render: page2 },
  '/test/3': { title: 'Test', render: page3 },
  '/test/4': { title: 'Test', render: page4 },
  '/test/5': { title: 'Test', render: page5 },
  '/test/6': { title: 'Test', render: page6 },
  '/test/7': { title: 'Test', render: page7 },
  '/test/8': { title: 'Test', render: page8 },
  '/test/9': { title: 'Test', render: page9 },
  '/test/10': { title: 'Test', render: page10 },
  '/test/11': { title: 'Test', render: page11 },
  '/test/12': { title: 'Test', render: loader },
  '/results': { title: 'Results', render: results },
};

export { menuEl, headerEl, routes };
