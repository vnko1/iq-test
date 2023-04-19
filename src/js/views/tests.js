const arrOfMark = [
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
  `<label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>`,
];

export const tests = page => {
  let width = 8 * page;
  if (page === 13) width = 100;

  if (page === 1) return page1(width);

  if (page === 2) return page2(width);

  if (page === 3) return page3(width);

  if (page === 4) return page4(width);

  if (page === 5) return page5(width);

  if (page === 6) return page6(width);

  if (page === 7) return page7(width);
};

function page1(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page1-form">
      <form class="test-form form">
        <p class="form-text">Ваш пол:</p>
        <label class="form-label">
          <input type="radio" name="sex" value="man" class="form-input" />
          <span class="form-label-text">Мужчина</span>
        </label>
        <label class="form-label">
          <input type="radio" name="sex" value="woman" class="form-input" />
          <span class="form-label-text">Женщина</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page1-btn" disabled>далее</button>
  </div>
</section>`;
}

function page2(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page2-form">
      <form class="test-form form">
        <p class="form-text">укажите ваш возраст:</p>
        <label class="form-label">
          <input type="radio" name="age" value="<18" class="form-input" />
          <span class="form-label-text">До 18</span>
        </label>
        <label class="form-label">
          <input type="radio" name="age" value="<25" class="form-input" />
          <span class="form-label-text">От 18 до 28</span>
        </label>
         <label class="form-label">
          <input type="radio" name="age" value="<35" class="form-input" />
          <span class="form-label-text">от 29 до 35</span>
        </label>
         <label class="form-label">
          <input type="radio" name="age" value=">36" class="form-input" />
          <span class="form-label-text">От 36</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page2-btn" disabled>далее</button>
  </div>
</section>`;
}

function page3(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page3-form">
      <form class="test-form form">
        <p class="form-text">Выберите лишнее:</p>
        <label class="form-label">
          <input type="radio" name="test" value="home" class="form-input" />
          <span class="form-label-text">Дом</span>
        </label>
        <label class="form-label">
          <input type="radio" name="test" value="shalash" class="form-input" />
          <span class="form-label-text">Шалаш</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="bungalo" class="form-input" />
          <span class="form-label-text">Бунгало</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="skameyka" class="form-input" />
          <span class="form-label-text">Скамейка</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="hizhina" class="form-input" />
          <span class="form-label-text">Хижина</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page3-btn" disabled>далее</button>
  </div>
</section>`;
}

function page4(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page4-form">
      <form class="test-form form">
        <p class="form-text">Продолжите числовой ряд: </br>
 18  20  24  32  </p>
        <label class="form-label">
          <input type="radio" name="test" value="62" class="form-input" />
          <span class="form-label-text">62</span>
        </label>
        <label class="form-label">
          <input type="radio" name="test" value="48" class="form-input" />
          <span class="form-label-text">48</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="74" class="form-input" />
          <span class="form-label-text">74</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="57" class="form-input" />
          <span class="form-label-text">57</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="60" class="form-input" />
          <span class="form-label-text">60</span>
        </label>
        <label class="form-label">
          <input type="radio" name="test" value="77" class="form-input" />
          <span class="form-label-text">77</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page4-btn" disabled>далее</button>
  </div>
</section>`;
}

function page5(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page5-form">
      <form class="test-form form">
        <p class="form-text">
          Выберите цвет, который </br> сейчас наиболее Вам </br> приятен:
        </p>
        <div class="input-wrapper">${arrOfMark.join('')}
        </div>
      </form>
    </div>
   <button type="click" class="test-button page5-btn" disabled>далее</button>
  </div>
</section>`;
}

function page6(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page6-form">
      <form class="test-form form">
        <p class="form-text">
          Отдохните пару секунд, еще </br> раз Выберите цвет, который </br> сейчас наиболее Вам </br> приятен:
        </p>
        <div class="input-wrapper">${arrOfMark.join('')}
        </div>
      </form>
    </div>
   <button type="click" class="test-button page6-btn" disabled>далее</button>
  </div>
</section>`;
}

function page7(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page7-form">
      <form class="test-form form">
        <p class="form-text">Какой из городов лишний?</p>
        <label class="form-label">
          <input type="radio" name="test" value="dc" class="form-input" />
          <span class="form-label-text">Вашингтон</span>
        </label>
        <label class="form-label">
          <input type="radio" name="test" value="london" class="form-input" />
          <span class="form-label-text">Лондон</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="paris" class="form-input" />
          <span class="form-label-text">Париж</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="ny" class="form-input" />
          <span class="form-label-text">Нью-Йорк</span>
        </label>
         <label class="form-label">
          <input type="radio" name="test" value="kiev" class="form-input" />
          <span class="form-label-text">Киев</span>
        </label>
        <label class="form-label">
          <input type="radio" name="test" value="ottava" class="form-input" />
          <span class="form-label-text">Оттава</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page7-btn" disabled>далее</button>
  </div>
</section>`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
