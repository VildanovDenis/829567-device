var slider_top=document.querySelector(".slider"),slider_btns=slider_top.querySelector(".slider__buttons");slider_btns.addEventListener("click",function(e){e.preventDefault();var t=slider_top.querySelector(".current-slide"),r=slider_top.querySelector("#"+e.target.dataset.for);t&&r&&(t.classList.toggle("current-slide"),r.classList.toggle("current-slide"),slider_btns.querySelector(".slider__button--active").classList.toggle("slider__button--active"),e.target.classList.toggle("slider__button--active"))});var services=document.querySelector(".services"),services_btns=services.querySelector(".services__buttons");services_btns.addEventListener("click",function(e){e.preventDefault();var t=services.querySelector(".services__current--decription"),r=services.querySelector("#"+e.target.dataset.for);t&&r&&(t.classList.toggle("services__current--decription"),r.classList.toggle("services__current--decription"),services_btns.querySelector(".services__button--current").classList.toggle("services__button--current"),e.target.classList.toggle("services__button--current"))});