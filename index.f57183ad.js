function n(n,e,a,t){Object.defineProperty(n,e,{get:a,set:t,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},l=a.parcelRequired7c6;null==l&&((l=function(n){if(n in t)return t[n].exports;if(n in s){var e=s[n];delete s[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(n,e){s[n]=e},a.parcelRequired7c6=l),l.register("kyEFX",(function(e,a){var t,s;n(e.exports,"register",(function(){return t}),(function(n){return t=n})),n(e.exports,"resolve",(function(){return s}),(function(n){return s=n}));var l={};t=function(n){for(var e=Object.keys(n),a=0;a<e.length;a++)l[e[a]]=n[e[a]]},s=function(n){var e=l[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),l("kyEFX").register(JSON.parse('{"5ZPII":"index.f57183ad.js","ecqHq":"rain_bk3.dc56bd99.png"}'));const o=document.querySelector(".menu-container"),r=document.querySelector(".header-button"),i=document.querySelector(".menu-button");r.addEventListener("click",(function(){o.classList.add("is-open")})),i.addEventListener("click",(function(){o.classList.remove("is-open")}));var c;c=new URL(l("kyEFX").resolve("ecqHq"),import.meta.url).toString();const p=[`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`,`<label class="form-label-box">\n            <input type="radio" name="color" value="color" class="form-input-box" />\n            <span class="form-box" style="background-color: ${b()}"></span>\n          </label>`],d=n=>{let e=8*n;return 13===n&&(e=100),1===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page1-form">\n      <form class="test-form form">\n        <p class="form-text">Ваш пол:</p>\n        <label class="form-label">\n          <input type="radio" name="sex" value="man" class="form-input" />\n          <span class="form-label-text">Мужчина</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="sex" value="woman" class="form-input" />\n          <span class="form-label-text">Женщина</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page1-btn" disabled>далее</button>\n  </div>\n</section>`}(e):2===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page2-form">\n      <form class="test-form form">\n        <p class="form-text">укажите ваш возраст:</p>\n        <label class="form-label">\n          <input type="radio" name="age" value="<18" class="form-input" />\n          <span class="form-label-text">До 18</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="age" value="<25" class="form-input" />\n          <span class="form-label-text">От 18 до 28</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="age" value="<35" class="form-input" />\n          <span class="form-label-text">от 29 до 35</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="age" value=">36" class="form-input" />\n          <span class="form-label-text">От 36</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page2-btn" disabled>далее</button>\n  </div>\n</section>`}(e):3===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page3-form">\n      <form class="test-form form">\n        <p class="form-text">Выберите лишнее:</p>\n        <label class="form-label">\n          <input type="radio" name="test" value="home" class="form-input" />\n          <span class="form-label-text">Дом</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="test" value="shalash" class="form-input" />\n          <span class="form-label-text">Шалаш</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="bungalo" class="form-input" />\n          <span class="form-label-text">Бунгало</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="skameyka" class="form-input" />\n          <span class="form-label-text">Скамейка</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="hizhina" class="form-input" />\n          <span class="form-label-text">Хижина</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page3-btn" disabled>далее</button>\n  </div>\n</section>`}(e):4===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page4-form">\n      <form class="test-form form">\n        <p class="form-text">Продолжите числовой ряд: </br>\n 18  20  24  32  </p>\n        <label class="form-label">\n          <input type="radio" name="test" value="62" class="form-input" />\n          <span class="form-label-text">62</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="test" value="48" class="form-input" />\n          <span class="form-label-text">48</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="74" class="form-input" />\n          <span class="form-label-text">74</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="57" class="form-input" />\n          <span class="form-label-text">57</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="60" class="form-input" />\n          <span class="form-label-text">60</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="test" value="77" class="form-input" />\n          <span class="form-label-text">77</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page4-btn" disabled>далее</button>\n  </div>\n</section>`}(e):5===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page5-form">\n      <form class="test-form form">\n        <p class="form-text">\n          Выберите цвет, который </br> сейчас наиболее Вам </br> приятен:\n        </p>\n        <div class="input-wrapper">${p.join("")}\n        </div>\n      </form>\n    </div>\n   <button type="click" class="test-button page5-btn" disabled>далее</button>\n  </div>\n</section>`}(e):6===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page6-form">\n      <form class="test-form form">\n        <p class="form-text">\n          Отдохните пару секунд, еще </br> раз Выберите цвет, который </br> сейчас наиболее Вам </br> приятен:\n        </p>\n        <div class="input-wrapper">${p.join("")}\n        </div>\n      </form>\n    </div>\n   <button type="click" class="test-button page6-btn" disabled>далее</button>\n  </div>\n</section>`}(e):7===n?function(n){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${n}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page7-form">\n      <form class="test-form form">\n        <p class="form-text">Какой из городов лишний?</p>\n        <label class="form-label">\n          <input type="radio" name="test" value="dc" class="form-input" />\n          <span class="form-label-text">Вашингтон</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="test" value="london" class="form-input" />\n          <span class="form-label-text">Лондон</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="paris" class="form-input" />\n          <span class="form-label-text">Париж</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="ny" class="form-input" />\n          <span class="form-label-text">Нью-Йорк</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="test" value="kiev" class="form-input" />\n          <span class="form-label-text">Киев</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="test" value="ottava" class="form-input" />\n          <span class="form-label-text">Оттава</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page7-btn" disabled>далее</button>\n  </div>\n</section>`}(e):void 0};function b(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const m=document.querySelector(".menu-container"),u=document.getElementById("header-container");let f=null;const v={"/":{title:"Home",render:()=>'\n   <section class="hero" id=\'hero\'>\n  <div class="container hero-container">\n    <p class="hero-top-text">Пройдите точный и быстрый</p>\n    <h1 class="hero-title">\n      тест на определение <br />\n      IQ\n    </h1>\n    <a href="/test/1" data-link class="hero-link">пройти тест</a>\n    <p class="hero-bottom-text">\n      <span class="hero-bottom--accent-text"\n        >И получите рекомендации по развитию своего интеллекта</span\n      >\n      и улучшению финансового благосостояния и личной жизни\n    </p>\n    <a href="#details" data-details-link class="details-link"\n      ><span class="arrow-container" data-details-link\n        ></span>\n      <span class="details-link-text" data-details-link>Подробнее</span></a\n    >\n  </div>\n</section>\n\n'},"#details":{title:"details",render:()=>'\n<div class=\'details-container\'><section class="description">\n  <div class="container description-container">\n    <p class="description-text">\n      Профессиональный IQ-тест позволяет не только определить коэффициент вашего\n      интеллекта, но и выработать список рекомендаций для повышения этого\n      показателя.\n    </p>\n  </div>\n</section>\n<section class="advice">\n  <div class="container advice-container">\n    <p class="advice-text">\n      Также по результатам теста <span>вы получите</span> подробные\n      <span>советы</span> по определению наиболее перспективной\n      <spanинтерпретация\n        >для вашего типа <span class="inner-text">интеллекта</span> сферы\n        деятельности</spanинтерпретация\n      >, которая принесет вам скорейший финансовый результат.\n    </p>\n    <a href="/test/1" data-link class="advice-link">пройти тест</a>\n  </div>\n</section>\n<section class="timing">\n  <div class="container timing-container">\n    <p class="timing-top-text">\n      Прохождение теста займет у вас не более <span>12 минут</span>, а его\n      результаты вы <span>сможете использовать всю жизнь</span>.\n    </p>\n    <p class="timing-bottom-text">\n      Профессиональная интерпретация и детально\n      <span>проработанные рекомендации</span>\n      позволят вам качественно <span>изменить все аспекты своей жизни:</span> от\n      финансового до любовного.\n    </p>\n    <a href="/test/1" data-link class="timing-link">пройти тест</a>\n    <p class="footer-text"><span>&#169;</span> 2019</p>\n  </div>\n</section></div>\n'},"/test/1":{title:"Test",render:d},"/test/2":{title:"Test",render:d},"/test/3":{title:"Test",render:d},"/test/4":{title:"Test",render:d},"/test/5":{title:"Test",render:d},"/test/6":{title:"Test",render:d},"/test/7":{title:"Test",render:d}};function y(){const n=v[location.pathname],a=v[location.hash];location.pathname.includes("test")?u.innerHTML=`<img src="${e(c)}" alt="brain" width="48" height="28" />\n      <p class="header-text">тест на определение IQ</p>`:u.innerHTML="",n||a?(console.log(n),function(n,e){const a=parseInt(e[e.length-1])||0;m.classList.remove("is-open"),document.title=n.title,app.innerHTML=n.render(a);const t=document.querySelector(".form");f=document.querySelector(".test-button"),t&&t.addEventListener("change",x);f&&f.addEventListener("click",g)}(n,location.pathname),a&&async function(n){m.classList.remove("is-open"),await app.insertAdjacentHTML("beforeend",n.render());const e=document.querySelector(".arrow-container"),a=document.querySelector(".details-container");setTimeout((()=>e.classList.add("rotate")),0),setTimeout((()=>a.classList.add("animate")),0)}(a)):(history.replaceState("","","/"),y())}function x(n){""!==n.target.value&&(f.disabled=!1)}function g(){const n=parseInt(location.pathname[location.pathname.length-1]);history.pushState("","",`${location.origin}/test/${n+1}`),y()}window.addEventListener("click",(n=>{n.target.matches("[data-link]")&&(n.preventDefault(),history.pushState("","",n.target.href),y()),n.target.matches("[data-details-link]")&&(n.preventDefault(),location.hash?history.pushState("","","/"):history.pushState("","","#details"),y())})),window.addEventListener("popstate",y),window.addEventListener("DOMContentLoaded",y);
//# sourceMappingURL=index.f57183ad.js.map
