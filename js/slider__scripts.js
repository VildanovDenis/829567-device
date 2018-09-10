var slider_top = document.querySelector(".slider");
var slider_btns = slider_top.querySelector(".slider__buttons");

slider_btns.addEventListener("click", function(evt) {
    evt.preventDefault();

    var old_slide = slider_top.querySelector(".current-slide");
    var new_slide = slider_top.querySelector("#"+evt.target.dataset.for);
    if (old_slide && new_slide) {
        old_slide.classList.toggle("current-slide");
        new_slide.classList.toggle("current-slide");
        var old_btn = slider_btns.querySelector(".slider__button--active")
        old_btn.classList.toggle("slider__button--active");
        evt.target.classList.toggle("slider__button--active");
    }
});

var services = document.querySelector(".services");
var services_btns = services.querySelector(".services__buttons");

services_btns.addEventListener("click", function(evt){
    evt.preventDefault();

    var old_description = services.querySelector(".services__current--decription");
    var new_description = services.querySelector("#"+evt.target.dataset.for);
    if (old_description && new_description) {
        old_description.classList.toggle("services__current--decription");
        new_description.classList.toggle("services__current--decription");
        var services_btn_old = services_btns.querySelector(".services__button--current");
        services_btn_old.classList.toggle("services__button--current");
        evt.target.classList.toggle("services__button--current");
    }
})