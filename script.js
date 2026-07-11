// =========================================
// TRAX_MASTER Dispatch Center
// Version 1.1
// =========================================

const dispatch = document.querySelector(".dispatch");
const image = document.querySelector(".dispatch-image");
const buttons = document.querySelectorAll(".hotspot");


// ------------------------------
// Стартовая анимация
// ------------------------------

dispatch.style.opacity = "0";
dispatch.style.transform = "scale(.97)";
dispatch.style.filter = "brightness(.25)";

window.addEventListener("load", () => {

    setTimeout(() => {

        dispatch.style.transition =
            "opacity .8s ease, transform .8s ease, filter .8s ease";

        dispatch.style.opacity = "1";
        dispatch.style.transform = "scale(1)";
        dispatch.style.filter = "brightness(1)";

    },200);

});


// ------------------------------
// Эффекты кнопок
// ------------------------------

buttons.forEach(button => {

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.02)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

    button.addEventListener("click",()=>{

        if(navigator.vibrate){

            navigator.vibrate(12);

        }

        button.style.transform="scale(.96)";

        setTimeout(()=>{

            button.style.transform="scale(1.02)";

        },120);

    });

});


// ------------------------------
// Запрет перетаскивания картинки
// ------------------------------

image.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});