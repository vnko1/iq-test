import { menuEl, headerEl, routes } from './constants';
import header from './views/header.js';

let responseEl = null;
let linkEl = null;
let testBtn = null;
let timerInterval = null;
let finishTime = null;

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
  linkEl = document.querySelector('.results-btn');
  responseEl = document.querySelector('.response-container');

  if (location.pathname.includes('results')) {
    startTimer();
    linkEl.addEventListener('click', onFetchClick);
  }

  if (formEl) {
    formEl.addEventListener('change', onHandleChange);
  }

  if (testBtn) {
    testBtn.addEventListener('click', onHandleClick);
  }
}

async function onFetchClick(e) {
  try {
    const results = await fetchData('https://swapi.dev/api/people/1/');
    renderFetchData(results);
    setTimeout(() => responseEl.classList.add('is-shown'), 4);
    linkEl.disabled = true;
  } catch (e) {
    console.log(e);
  }
}

async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

function renderFetchData(data) {
  const mark = `<div class="response-container">
 <div class='response-style-container'><p class="response-text">Имя: <span>${data.name}</span></p>
  <p class="response-text">Дата рождения: <span>${data.birth_year}</span></p>
  <p class="response-text">Цвет глаз: <span>${data.eye_color}</span></p>
  <p class="response-text">Цвет волос: <span>${data.hair_color}</span></p>
  <p class="response-text">Пол: <span>${data.gender}</span></p>
  <p class="response-text">Вес: <span>${data.mass}</span></p>
  <p class="response-text">Рост: <span>${data.height}</span></p></div>
</div>`;

  responseEl.innerHTML = mark;
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

function startTimer() {
  finishTime = Date.now() + 600000;
  setTimer();
  timerInterval = setInterval(setTimer, 1000);
}

function setTimer() {
  const currentTime = Date.now();
  const deltaTime = finishTime - currentTime;

  if (deltaTime < 1000) {
    outputTimerValue(convertMs(deltaTime));
    clearInterval(timerInterval);
    return;
  }

  if (!location.pathname.includes('results')) {
    clearInterval(timerInterval);
    return;
  }

  outputTimerValue(convertMs(deltaTime));
}

function outputTimerValue({ minutes, seconds }) {
  const minutesOutput = document.querySelector('[data-minutes]');
  const secondsOutput = document.querySelector('[data-seconds]');

  minutesOutput.textContent = minutes;
  secondsOutput.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
