document.addEventListener("DOMContentLoaded", function () {
  const imagenes = document.querySelectorAll(".proyecto img");

  imagenes.forEach((img) => {
    img.addEventListener("click", function () {
      this.classList.toggle("expandir");  // Alternamos la clase para expandir y reducir la imagen
    });
  });
});
