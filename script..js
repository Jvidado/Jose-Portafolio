document.addEventListener("DOMContentLoaded", function() {
    // Configuración inicial
    const carruselBtn = document.getElementById("abrir-carrusel");
    const carruselOverlay = document.getElementById("carrusel-overlay");
    const cerrarBtn = document.querySelector(".cerrar-carrusel");
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Obtener todas las imágenes de proyectos
    const imagenesProyectos = document.querySelectorAll(".project-img");
    
    // Agregar imágenes al carrusel
    imagenesProyectos.forEach(img => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        swiperWrapper.appendChild(slide);
    });

    // Inicializar Swiper
    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: true,
    });

    // Abrir carrusel
    carruselBtn.addEventListener("click", () => {
        carruselOverlay.classList.add("active");
        swiper.update(); // Actualizar swiper al abrir
    });

    // Cerrar carrusel
    cerrarBtn.addEventListener("click", () => {
        carruselOverlay.classList.remove("active");
    });

    // Cerrar al hacer clic fuera
    carruselOverlay.addEventListener("click", (e) => {
        if (e.target === carruselOverlay) {
            carruselOverlay.classList.remove("active");
        }
    });
}); 

