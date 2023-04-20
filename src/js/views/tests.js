import { getRandomHexColor } from '../functions';
import p8Url from '/src/media/p8-image.jpg';
import p10Url from '/src/media/p10-image.jpg';
import p11Url from '/src/media/p11-image.jpg';

export function loader() {
  return `<div class="container test-container loader-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: 100%" class="bar"></div>
      </div>
    </div>
    <p class='loader-top-text'>Обработка результатов</p>
  <div class="loader-wrapper">
 <svg class='loader-image' viewBox="0 0 30 32">
<path fill="#3bde7c" style="fill: var(--color1, #3bde7c)" d="M13.909 6.939c0 0 0.001 0 0.001 0 1.917 0 3.47-1.553 3.471-3.47v-0c-0.001-1.916-1.554-3.469-3.471-3.469-0.001 0-0.001 0-0.001 0h0c-0 0-0.001 0-0.001 0-1.916 0-3.47 1.553-3.471 3.469v0c0.001 1.917 1.554 3.47 3.471 3.47 0.001 0 0.001 0 0.001 0h-0zM20.71 8.486c1.744 0 3.158-1.413 3.158-3.155s-1.414-3.155-3.157-3.155c-0 0-0.001 0-0.001 0h0c-0 0-0.001 0-0.001 0-1.743 0-3.156 1.413-3.157 3.155v0c0.001 1.743 1.414 3.155 3.157 3.155 0 0 0.001 0 0.001 0h-0zM25.615 13.237c0 0 0.001 0 0.001 0 1.568 0 2.84-1.271 2.841-2.84v-0c-0.001-1.568-1.272-2.84-2.841-2.84-0 0-0.001 0-0.001 0h0c-0 0-0.001 0-0.001 0-1.568 0-2.84 1.271-2.841 2.84v0c0.001 1.568 1.272 2.84 2.841 2.84 0 0 0.001 0 0.001 0h-0zM29.74 17.662c0.021-0.121 0.033-0.261 0.033-0.404 0-1.252-0.911-2.29-2.106-2.489l-0.015-0.002c-0.126-0.022-0.271-0.035-0.42-0.035-1.394 0-2.524 1.13-2.524 2.524 0 1.256 0.918 2.298 2.12 2.492l0.014 0.002c0.122 0.021 0.262 0.033 0.405 0.033 1.251 0 2.29-0.91 2.49-2.105l0.002-0.015zM25.153 26.194c0 0 0.001 0 0.001 0 1.219 0 2.208-0.988 2.208-2.207v-0c0-1.22-0.989-2.208-2.209-2.208-0 0-0.001 0-0.001 0-1.219 0-2.208 0.988-2.208 2.207v0c0 1.22 0.989 2.208 2.209 2.208zM19.918 30.605c0 0 0 0 0 0 1.046 0 1.894-0.848 1.895-1.894v-0c-0.001-1.046-0.849-1.894-1.895-1.894-0 0-0 0-0 0h0c-0 0-0.001 0-0.001 0-1.046 0-1.894 0.848-1.895 1.893v0c0 1.046 0.848 1.894 1.895 1.894 0 0 0.001 0 0.001 0h-0zM13.005 31.686c0 0 0.001 0 0.001 0 0.871 0 1.578-0.706 1.578-1.578v-0c-0-0.871-0.707-1.578-1.578-1.578-0 0-0.001 0-0.001 0h0c-0 0-0.001 0-0.001 0-0.871 0-1.578 0.706-1.578 1.578v0c0 0.871 0.707 1.578 1.578 1.578 0 0 0.001 0 0.001 0h-0zM6.343 29.052c0.697 0 1.262-0.565 1.262-1.262s-0.565-1.262-1.262-1.262c-0.697 0-1.262 0.565-1.262 1.262 0 0 0 0.001 0 0.001v-0c0 0.697 0.565 1.261 1.263 1.261zM1.794 23.349c0 0 0 0 0 0 0.523 0 0.946-0.424 0.946-0.946s-0.424-0.946-0.946-0.946v0c-0 0-0 0-0 0-0.522 0-0.946 0.424-0.946 0.946s0.423 0.946 0.946 0.946v0zM0.632 16.083c0 0 0 0 0 0 0.349 0 0.632-0.283 0.632-0.632s-0.283-0.632-0.632-0.632v0c-0.349 0-0.632 0.283-0.632 0.632s0.283 0.632 0.632 0.632v0zM3.178 9.193c-0.005 0-0.010 0-0.015 0-0.175 0-0.316-0.142-0.316-0.316s0.142-0.316 0.316-0.316c0.003 0 0.006 0 0.008 0h-0c0.171 0.004 0.308 0.144 0.308 0.316 0 0.169-0.133 0.308-0.3 0.316l-0.001 0z"></path>
</svg>
</div>
    <p class='loader-bottom-text'>Определение стиля мышления...........
............................................................</p>
    </div>`;
}

export function page1(page) {
  const width = 8 * page;
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
          <input type="radio" name="gender" value="man" class="form-input" />
          <span class="form-label-text">Мужчина</span>
        </label>
        <label class="form-label">
          <input type="radio" name="gender" value="woman" class="form-input" />
          <span class="form-label-text">Женщина</span>
        </label>
      </form>
    </div>
      <button type="click" class="test-button page1-btn" disabled>далее</button>
  </div>
</section>`;
}

export function page2(page) {
  const width = 8 * page;
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

export function page3(page) {
  const width = 8 * page;
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

export function page4(page) {
  const width = 8 * page;
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

export function page5(page) {
  const width = 8 * page;
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
        <div class="input-wrapper"><label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
        </div>
      </form>
    </div>
   <button type="click" class="test-button page5-btn" disabled>далее</button>
  </div>
</section>`;
}

export function page6(page) {
  const width = 8 * page;
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
        <div class="input-wrapper"><label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
  <label class="form-label-box">
            <input type="radio" name="color" value="color" class="form-input-box" />
            <span class="form-box" style="background-color: ${getRandomHexColor()}"></span>
          </label>
        </div>
      </form>
    </div>
   <button type="click" class="test-button page6-btn" disabled>далее</button>
  </div>
</section>`;
}

export function page7(page) {
  const width = 8 * page;
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

export function page8(page) {
  const width = 8 * page;
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

export function page9(page) {
  const width = 8 * page;
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

export function page10(page) {
  const width = 8 * page;
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

export function page11(page) {
  const width = 8 * page;
  return `<section class="test">
  <div class="container test-container">
    <div class="progress-bar-container">
      <div class="progress">
        <div style="width: ${width}%" class="bar"></div>
      </div>
    </div>
    <div class="form-container page11-form">
      <p class="test-text p11-text">
        Вставьте подходящее </br>число
      </p>
      <img src="${p11Url}" alt="test" width="228" height="207" class="test-image p11-image" />
      <div class='p11-line'></div>
      <form class="test-form form">
        <div class="p11-wrapper">
          <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="34"
              class="form-number-input"
            />
            <span class="form-number-text-box">34</span>
          </label>
           <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="36"
              class="form-number-input"
            />
            <span class="form-number-text-box">36</span>
          </label>
           <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="54"
              class="form-number-input"
            />
            <span class="form-number-text-box">54</span>
          </label>
           <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="44"
              class="form-number-input"
            />
            <span class="form-number-text-box">44</span>
          </label>
           <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="66"
              class="form-number-input"
            />
            <span class="form-number-text-box">66</span>
          </label>
           <label class="form-number-label">
            <input
              type="radio"
              text-
              name="number"
              value="42"
              class="form-number-input"
            />
            <span class="form-number-text-box">42</span>
          </label>
        </div>
      </form>
    </div>
    <button type="submit" class="test-button page11-btn" disabled>далее</button>
  </div>
</section>`;
}
