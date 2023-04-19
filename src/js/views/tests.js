export const tests = page => {
  let width = 8 * page;
  if (page === 13) width = 100;

  if (page === 1) return page1(width);

  if (page === 2) return page2(width);

  if (page === 3) return page3(width);

  if (page === 4) return page4(width);
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
