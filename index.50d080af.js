function e(e,n,t,s){Object.defineProperty(e,n,{get:t,set:s,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return s[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},t.parcelRequired7c6=r),r.register("kyEFX",(function(n,t){var s,a;e(n.exports,"register",(function(){return s}),(function(e){return s=e})),e(n.exports,"resolve",(function(){return a}),(function(e){return a=e}));var r={};s=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},a=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.50d080af.js","8YzZn":"p8-image.d203fdc6.jpg","lffsU":"p10-image.2e9cbf27.jpg","8ob5l":"p11-image.c740040d.jpg","aSw2S":"call.b384b9d7.svg","ecqHq":"rain_bk3.dc56bd99.png"}'));const i=document.querySelector(".menu-container"),o=document.querySelector(".header-button"),l=document.querySelector(".menu-button");o.addEventListener("click",(function(){i.classList.add("is-open")})),l.addEventListener("click",(function(){i.classList.remove("is-open")}));new URL(r("kyEFX").resolve("8YzZn"),import.meta.url).toString();new URL(r("kyEFX").resolve("lffsU"),import.meta.url).toString();new URL(r("kyEFX").resolve("8ob5l"),import.meta.url).toString();k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k(),k();var c=tests=e=>{let n=8*e;switch(12===e&&(n=100),e){case 1:return function(e){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${e}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page1-form">\n      <form class="test-form form">\n        <p class="form-text">Ваш пол:</p>\n        <label class="form-label">\n          <input type="radio" name="gender" value="man" class="form-input" />\n          <span class="form-label-text">Мужчина</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="gender" value="woman" class="form-input" />\n          <span class="form-label-text">Женщина</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page1-btn" disabled>далее</button>\n  </div>\n</section>`}(n);case 2:return function(e){return`<section class="test">\n  <div class="container test-container">\n    <div class="progress-bar-container">\n      <div class="progress">\n        <div style="width: ${e}%" class="bar"></div>\n      </div>\n    </div>\n    <div class="form-container page2-form">\n      <form class="test-form form">\n        <p class="form-text">укажите ваш возраст:</p>\n        <label class="form-label">\n          <input type="radio" name="age" value="<18" class="form-input" />\n          <span class="form-label-text">До 18</span>\n        </label>\n        <label class="form-label">\n          <input type="radio" name="age" value="<25" class="form-input" />\n          <span class="form-label-text">От 18 до 28</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="age" value="<35" class="form-input" />\n          <span class="form-label-text">от 29 до 35</span>\n        </label>\n         <label class="form-label">\n          <input type="radio" name="age" value=">36" class="form-input" />\n          <span class="form-label-text">От 36</span>\n        </label>\n      </form>\n    </div>\n      <button type="click" class="test-button page2-btn" disabled>далее</button>\n  </div>\n</section>`}(n)}};var p;p=new URL(r("kyEFX").resolve("aSw2S"),import.meta.url).toString();const d=document.querySelector(".menu-container"),u=document.getElementById("header-container");const m={"/":{title:"Home",render:()=>'\n   <section class="hero" id=\'hero\'>\n  <div class="container hero-container">\n    <p class="hero-top-text">Пройдите точный и быстрый</p>\n    <h1 class="hero-title">\n      тест на определение <br />\n      IQ\n    </h1>\n    <a href="/test/1" data-link class="hero-link">пройти тест</a>\n    <p class="hero-bottom-text">\n      <span class="hero-bottom--accent-text"\n        >И получите рекомендации по развитию своего интеллекта</span\n      >\n      и улучшению финансового благосостояния и личной жизни\n    </p>\n    <a href="#details" data-details-link class="details-link"\n      ><span class="arrow-container" data-details-link\n        ></span>\n      <span class="details-link-text" data-details-link>Подробнее</span></a\n    >\n  </div>\n</section>\n\n'},"#details":{title:"details",render:()=>'\n<div class=\'details-container\'><section class="description">\n  <div class="container description-container">\n    <p class="description-text">\n      Профессиональный IQ-тест позволяет не только определить коэффициент вашего\n      интеллекта, но и выработать список рекомендаций для повышения этого\n      показателя.\n    </p>\n  </div>\n</section>\n<section class="advice">\n  <div class="container advice-container">\n    <p class="advice-text">\n      Также по результатам теста <span>вы получите</span> подробные\n      <span>советы</span> по определению наиболее перспективной\n      <spanинтерпретация\n        >для вашего типа <span class="inner-text">интеллекта</span> сферы\n        деятельности</spanинтерпретация\n      >, которая принесет вам скорейший финансовый результат.\n    </p>\n    <a href="/test/1" data-link class="advice-link">пройти тест</a>\n  </div>\n</section>\n<section class="timing">\n  <div class="container timing-container">\n    <p class="timing-top-text">\n      Прохождение теста займет у вас не более <span>12 минут</span>, а его\n      результаты вы <span>сможете использовать всю жизнь</span>.\n    </p>\n    <p class="timing-bottom-text">\n      Профессиональная интерпретация и детально\n      <span>проработанные рекомендации</span>\n      позволят вам качественно <span>изменить все аспекты своей жизни:</span> от\n      финансового до любовного.\n    </p>\n    <a href="/test/1" data-link class="timing-link">пройти тест</a>\n    <p class="footer-text"><span>&#169;</span> 2019</p>\n  </div>\n</section></div>\n'},"/test/1":{title:"Test",render:c},"/test/2":{title:"Test",render:c},"/test/3":{title:"Test",render:c},"/test/4":{title:"Test",render:c},"/test/5":{title:"Test",render:c},"/test/6":{title:"Test",render:c},"/test/7":{title:"Test",render:c},"/test/8":{title:"Test",render:c},"/test/9":{title:"Test",render:c},"/test/10":{title:"Test",render:c},"/test/11":{title:"Test",render:c},"/test/12":{title:"Test",render:c},"/results":{title:"Results",render:()=>`<section class="results">\n  <div class="container results-container">\n    <p class="results-top-text">Ваш результат рассчитан:</p>\n    <p class="results-underTop-text">\n      <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более\n      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!\n    </p>\n    <p class="results-middle-text">Скорее получите свой результат!</p>\n    <p class="results-underMiddle-text">\n      В целях защиты персональных данных результат теста, их подробная\n      интерпретация и рекомендации доступны в виде голосового сообщения по\n      звонку с вашего мобильного телефона\n    </p>\n    <p class="results-bottom-text">\n      Звоните скорее, запись доступна всего\n      <span data-minutes>10</span><span>:</span><span data-seconds>00</span> минут\n    </p>\n    <button type='button' class="results-btn"\n      ><img src="${n(p)}" alt="call" width="30" height="30" /><span\n        class="results-link-text"\n        >Позвонить и прослушать результат\n      </span></button\n    >\n    <div class="response-container"></div>\n    <p class='footer-text'>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,</p>\n  </div>\n</section>`}};var f;f=new URL(r("kyEFX").resolve("ecqHq"),import.meta.url).toString();let v=null,h=null,b=null,g=null,y=null;function x(){const e=m[location.pathname],t=m[location.hash];12===T()&&setTimeout((()=>{history.pushState("","",`${location.origin}/results`),x()}),3e3),location.pathname.includes("test")||location.pathname.includes("results")?u.innerHTML=location.pathname.includes("test")?`<div class='header-test-content-wrapper'><img src="${n(f)}" alt="brain" width="48" height="28" />\n      <p class="header-text">тест на определение IQ</p><div/>`:location.pathname.includes("results")?`<div class='header-results-content-wrapper'><img src="${n(f)}" alt="brain" width="48" height="28" />\n      <p class="header-text header-text-results">Готово!</p></div>`:void 0:u.innerHTML="",e||t?(function(e){const n=T()||0;d.classList.remove("is-open"),document.title=e.title,app.innerHTML=e.render(n);const t=document.querySelector(".form");b=document.querySelector(".test-button"),h=document.querySelector(".results-btn"),v=document.querySelector(".response-container"),location.pathname.includes("results")&&(y=Date.now()+6e5,L(),g=setInterval(L,1e3),h.addEventListener("click",S));t&&t.addEventListener("change",w);b&&b.addEventListener("click",E)}(e),t&&function(e){d.classList.remove("is-open"),app.insertAdjacentHTML("beforeend",e.render());const n=document.querySelector(".arrow-container"),t=document.querySelector(".details-container");setTimeout((()=>{n.classList.add("rotate"),t.classList.add("animate")}),0)}(t)):(history.replaceState("","","/"),x())}async function S(e){try{!function(e){const n=`<div class="response-container">\n <div class='response-style-container'><p class="response-text">Имя: <span>${e.name}</span></p>\n  <p class="response-text">Дата рождения: <span>${e.birth_year}</span></p>\n  <p class="response-text">Цвет глаз: <span>${e.eye_color}</span></p>\n  <p class="response-text">Цвет волос: <span>${e.hair_color}</span></p>\n  <p class="response-text">Пол: <span>${e.gender}</span></p>\n  <p class="response-text">Вес: <span>${e.mass}</span></p>\n  <p class="response-text">Рост: <span>${e.height}</span></p></div>\n</div>`;v.innerHTML=n}(await async function(e){const n=await fetch(e);if(!n.ok)throw new Error(n.status);return n.json()}("https://swapi.dev/api/people/1/")),setTimeout((()=>v.classList.add("is-shown")),4),h.disabled=!0}catch(e){console.log(e)}}function w(e){""!==e.target.value&&(b.disabled=!1)}function E(){const e=T(location.pathname);history.pushState("","",`${location.origin}/test/${e+1}`),x()}function T(){return+location.pathname.split("/").reverse()[0]}function k(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function L(){const e=Date.now(),n=y-e;if(n<1e3)return I(H(n)),void clearInterval(g);location.pathname.includes("results")?I(H(n)):clearInterval(g)}function I({minutes:e,seconds:n}){const t=document.querySelector("[data-minutes]"),s=document.querySelector("[data-seconds]");t.textContent=e,s.textContent=n}function H(e){const n=6e4,t=36e5,s=24*t;return{minutes:R(Math.floor(e%s%t/n)),seconds:R(Math.floor(e%s%t%n/1e3))}}function R(e){return String(e).padStart(2,"0")}window.addEventListener("click",(function(e){e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState("","",e.target.href),x()),e.target.matches("[data-details-link]")&&(e.preventDefault(),location.hash?history.pushState("","","/"):history.pushState("","","#details"),x())})),window.addEventListener("popstate",x),window.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=index.50d080af.js.map
