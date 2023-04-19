import p8Url from '/src/media/p8-image.jpg';
import p10Url from '/src/media/p10-image.jpg';

const arrOfMark1 = [
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
const arrOfMark2 = [
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

export default tests = page => {
  let width = 8 * page;
  if (page === 13) width = 100;

  if (page === 1) return page1(width);

  if (page === 2) return page2(width);

  if (page === 3) return page3(width);

  if (page === 4) return page4(width);

  if (page === 5) return page5(width);

  if (page === 6) return page6(width);

  if (page === 7) return page7(width);

  if (page === 8) return page8(width);

  if (page === 9) return page9(width);

  if (page === 10) return page10(width);
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
        <div class="input-wrapper">${arrOfMark1.join('')}
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
        <div class="input-wrapper">${arrOfMark2.join('')}
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

function page8(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page8-form">
      <p class="test-text">
        Выберите правильную фигуру из четырёх пронумерованных.
      </p>
      <img src="${p8Url}" alt="test" width="185" height="235" class="test-image" />
      <form class="test-form form">
        <div class="input-numbers-wrapper">
          <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="1"
              class="form-number-input"
            />
            <span class="form-number-text-box">1</span>
          </label>
          <label class="form-number-label">
            <input
              type="radio"
              name="number"
              value="2"
              class="form-number-input"
            />
            <span class="form-number-text-box">2</span>
          </label>
          <label class="form-number-label">
            <input
              type="radio"
              name="number"
              value="3"
              class="form-number-input"
            />
            <span class="form-number-text-box">3</span>
          </label>
          <label class="form-number-label">
            <input
              type="radio"
              name="number"
              value="4"
              class="form-number-input"
            />
            <span class="form-number-text-box">4</span>
          </label>
        </div>
      </form>
    </div>
    <button type="submit" class="test-button page8-btn" disabled>далее</button>
  </div>
</section>`;
}

function page9(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page9-form">
      <form class="test-form form">
        <p class="form-text">Какой из городов лишний?</p>
       <div class='p9-form-wrapper'><label class="form-label p9-label">
          <input type="radio" name="test" value="text1" class="form-input" />
          <span class="form-label-text p9-label-text">Наслаждаться </br>каждой минутой проведенного времени</span>
        </label>
        <label class="form-label p9-label">
          <input type="radio" name="test" value="text2" class="form-input" />
          <span class="form-label-text p9-label-text">Быть устремленными мыслями в будущее</span>
        </label>
         <label class="form-label p9-label">
          <input type="radio" name="test" value="text3" class="form-input" />
          <span class="form-label-text p9-label-text">Учитывать в ежедневной практике прошлый опыт</span>
        </label></div>
      </form>
    </div>
      <button type="click" class="test-button page9-btn" disabled>далее</button>
  </div>
</section>`;
}

function page10(width) {
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page10-form">
     <p class="test-text p10-text">
        Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:
      </p>
      <img src="${p10Url}" alt="test" width="173" height="115" class="test-image p10-image" />
      <form class="test-form form p10-test-form">
       <div class='p10-form-wrapper'><label class="form-label p10-label">
          <input type="radio" name="test" value="text1" class="form-input" />
          <span class="form-label-text p10-label-text">Оно остроконечное</span>
        </label>
        <label class="form-label p10-label">
          <input type="radio" name="test" value="text2" class="form-input" />
          <span class="form-label-text p10-label-text">Оно устойчиво</span>
        </label>
         <label class="form-label p10-label">
          <input type="radio" name="test" value="text3" class="form-input" />
          <span class="form-label-text p10-label-text">Оно-находится в состоянии равновесия</span>
        </label></div>
      </form>
    </div>
      <button type="click" class="test-button page9-btn" disabled>далее</button>
  </div>
</section>`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
