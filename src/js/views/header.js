import url from '/src/media/rain_bk3.png';

export default () => {
  if (location.pathname.includes('test')) {
    return `<div class='header-test-content-wrapper'><img src="${url}" alt="brain" width="48" height="28" />
      <p class="header-text">тест на определение IQ</p><div/>`;
  }

  if (location.pathname.includes('results')) {
    return `<div class='header-results-content-wrapper'><img src="${url}" alt="brain" width="48" height="28" />
      <p class="header-text header-text-results">Готово!</p></div>`;
  }
};
