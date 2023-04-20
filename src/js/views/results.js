import svgUrl from '/src/media/call.svg';

export default () => {
  return `<section class="results">
  <div class="container results-container">
    <p class="results-top-text">Ваш результат рассчитан:</p>
    <p class="results-underTop-text">
      <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более
      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <p class="results-middle-text">Скорее получите свой результат!</p>
    <p class="results-underMiddle-text">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
    <p class="results-bottom-text">
      Звоните скорее, запись доступна всего
      <span data-minutes>10</span><span>:</span><span data-seconds>00</span> минут
    </p>
    <button type='button' class="results-btn"
      ><img src="${svgUrl}" alt="call" width="30" height="30" /><span
        class="results-link-text"
        >Позвонить и прослушать результат
      </span></button
    >
    <div class="response-container"></div>
    <p class='footer-text'>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,</p>
  </div>
</section>`;
};
