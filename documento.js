const btnIzq = document.querySelector(".btn-izq"),
    btnDer = document.querySelector(".btn-der"),
    imgCarru = document.querySelector("#img-carru"),
    carruSect = document.querySelectorAll(".carru-sect");

btnIzq.addEventListener("click", e => movIzq())
btnDer.addEventListener("click", e => movDer())

setInterval(() =>{
    movDer()
}, 3000)

// la variable operación inicia en 0 y se le suma el width img que es el ancho de cada imagen dividido por el lenght de la clase carru-sect que en este caso sería 3 que contiene una imagen cada una, como son 3 va sumando de 33.3%

let operacion = 0;
counter = 0,
    widthImg = 100 / carruSect.length;


function movDer() {
    if (counter >= carruSect.length - 1) {
        counter = 0; //si el contador que mapea el lugar en que va el carrusel es mayor igual que el lenght se resetea a 0
        operacion = 0;
        imgCarru.style.transform = `translate(-${operacion}%`;
        imgCarru.style.transition = "none";
        return;
    }

    counter++;
    operacion = operacion + widthImg;
    imgCarru.style.transform = `translate(-${operacion}%`;
    imgCarru.style.transition = "all ease 0.6s";
}


function movIzq() {
    counter--;
    if (counter < 0) {
        counter = carruSect.length - 1;
        operacion = widthImg * (carruSect.length - 1);
        imgCarru.style.transform = `translate(-${operacion}%`;
        imgCarru.style.transition = "none";
        return;
    }
    operacion = operacion + - widthImg;
    imgCarru.style.transform = `translate(-${operacion}%`
    imgCarru.style.transition = "all ease 0.6s";
}


$('.formulario').mouseover(function () {
  $('.formulario').css('background-color', 'orange')
});

$('.formulario').mouseout(function () {
  $('.formulario').css('background-color', 'greenyellow')
});







