`use strict`;

let stars = document.getElementById(`stars`);
let moon = document.getElementById(`moon`);
let montainBehind= document.getElementById(`mountains-behind`);
let montainfront= document.getElementById(`mountains-front`);
let text = document.getElementById(`text`);
let btn = document.getElementById(`btn`);
let header = document.querySelector(`header`);


window.addEventListener(`scroll`, function(){
    let value = window.scrollY;
    stars.style.left = value * 0.3 + `px`;
    moon.style.top = value * 1.1 + `px`;
    montainBehind.style.left = value * 0.5 + `px`;
    montainfront.style.left = value * 0 + `px`;
    text.style.marginRight = value * 4 + `px`;
    text.style.marginTop = value * 1.5 + `px`;
    btn.style.marginTop = value * 1.5 + `px`;
    header.style.top = value * 0.5 + `px`;

})