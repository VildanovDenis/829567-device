var mainSlider = document.querySelector(.slider);
console.log(mainSlider);
var sliderButton = mainSlider.querySelectorAll(.slider__button);
var sliderSlide = mainSlider.querySelectorAll(.slider__slide);
var servicesSlider = document.querySelector(.services);
console.log(servicesSlider);
var popupBackground = document.querySelector(.popup-background);
var map = document.querySelector(.map__link);
console.log(popupMap);
var popupMap = document.querySelector(.popup-map);
var popupWriteUs = document.querySelector(.write-us__link);
console.log(popupWriteUs);
var popupForm = document.querySelector(.popup-form);
var popupFormBack = popupForm.querySelector(.popup__close-button);
console.log(popupFormBack);
var form = popupForm.querySelector(form);
var inputName = popupForm.querySelector(.popup__name);
var inputMail = popupForm.querySelector(.popup__mail);
var inputText = popupForm.querySelector(.popup__half-input--textarea);
var storageName = localStorage.getItem(Name);
var storageMail = localStorage.getItem(Mail);
console.log(form);
try{storagename:localStorage.getItem(Name)}catch (err){storagename:false}try{storagemail:localStorage.getItem(Mail)}catch (err){storagemail:false});
popupWriteUs.addEventListener(click,function(evt){ifstoragenameinputnamevalue:storageName;ifstoragemailinputmailvalue:storageMail});
window.addEventListener(keydown,function(esc){ifesckeycode:== 27) { if (popupBackground.classList.contains(popup--display)) { esc.preventDefault()}