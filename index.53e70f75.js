const n=document.querySelector(".menu-container"),t=document.querySelector(".header-button"),e=document.querySelector(".menu-button");t.addEventListener("click",(function(){n.classList.add("is-open")})),e.addEventListener("click",(function(){n.classList.remove("is-open")}));const a=document.querySelector(".menu-container"),s={"/":{title:"Home",render:()=>'\n   <section class="hero" id=\'hero\'>\n  <div class="container hero-container">\n    <p class="hero-top-text">Пройдите точный и быстрый</p>\n    <h1 class="hero-title">\n      тест на определение <br />\n      IQ\n    </h1>\n    <a href="/start" data-link class="hero-link">пройти тест</a>\n    <p class="hero-bottom-text">\n      <span class="hero-bottom--accent-text"\n        >И получите рекомендации по развитию своего интеллекта</span\n      >\n      и улучшению финансового благосостояния и личной жизни\n    </p>\n    <a href="#details" data-details-link class="details-link"\n      ><span class="arrow-container" data-details-link\n        ></span>\n      <span class="details-link-text" data-details-link>Подробнее</span></a\n    >\n  </div>\n</section>\n\n'},"#details":{title:"details",render:()=>'\n<div class=\'details-container\'><section class="description">\n  <div class="container description-container">\n    <p class="description-text">\n      Профессиональный IQ-тест позволяет не только определить коэффициент вашего\n      интеллекта, но и выработать список рекомендаций для повышения этого\n      показателя.\n    </p>\n  </div>\n</section>\n<section class="advice">\n  <div class="container advice-container">\n    <p class="advice-text">\n      Также по результатам теста <span>вы получите</span> подробные\n      <span>советы</span> по определению наиболее перспективной\n      <span\n        >для вашего типа <span class="inner-text">интеллекта</span> сферы\n        деятельности</span\n      >, которая принесет вам скорейший финансовый результат.\n    </p>\n    <a href="/start" data-link class="advice-link">пройти тест</a>\n  </div>\n</section>\n<section class="timing">\n  <div class="container timing-container">\n    <p class="timing-top-text">\n      Прохождение теста займет у вас не более <span>12 минут</span>, а его\n      результаты вы <span>сможете использовать всю жизнь</span>.\n    </p>\n    <p class="timing-bottom-text">\n      Профессиональная интерпретация и детально\n      <span>проработанные рекомендации</span>\n      позволят вам качественно <span>изменить все аспекты своей жизни:</span> от\n      финансового до любовного.\n    </p>\n    <a href="/start" data-link class="timing-link">пройти тест</a>\n    <p class="footer-text"><span>&#169;</span> 2019</p>\n  </div>\n</section></div>\n'},"/start":{title:"Test",render:()=>"<div>TEST</div>"}};async function i(){const n=s[location.pathname],t=s[location.hash];if(n||t){if(a.classList.remove("is-open"),document.title=n.title,app.innerHTML=n.render(),"details"===t?.title){a.classList.remove("is-open"),await app.insertAdjacentHTML("beforeend",t.render());const n=document.querySelector(".arrow-container"),e=document.querySelector(".details-container");setTimeout((()=>n.classList.add("rotate")),0),setTimeout((()=>e.classList.add("animate")),0)}}else history.replaceState("","","/"),i()}window.addEventListener("click",(n=>{n.preventDefault(),n.target.matches("[data-link]")&&(history.pushState("","",n.target.href),i()),n.target.matches("[data-details-link]")&&(location.hash?history.pushState("","","/"):history.pushState("","","#details"),i())})),window.addEventListener("popstate",i),window.addEventListener("DOMContentLoaded",i);
//# sourceMappingURL=index.53e70f75.js.map