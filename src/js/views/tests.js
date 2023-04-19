export const tests = page => {
  let width = 7 * page;
  if (page === 14) width = 100;

  if (page === 1) {
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

  if (page === 2) {
    return `<div>page 2</div>`;
  }
};
