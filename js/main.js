const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const request__dialog = document.querySelector('.request__dialog');
const btn__request = document.querySelector('.btn__request');
const protection__btn = document.querySelector('.protect__btn');



function openModalAndBlockScrollRequest (){
    request__dialog.showModal();
    document.body.classList.add('scroll-block');
};
function returnScrollRequest(){
    document.body.classList.remove('scroll-block');
};
function closeRequest(){
    request__dialog.close();
    returnScrollRequest();
}
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

protection__btn.addEventListener('click', () => {
    openModalAndBlockScrollRequest();
});


btn__request.addEventListener('click', () => {
    alert("Спасибо за предложение! Обязательно рассмотрим");
    closeRequest();
});