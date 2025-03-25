document.addEventListener('DOMContentLoaded', () => {
    // Animación de aparición del marco
    const frame = document.querySelector('.frame');
    setTimeout(() => {
        frame.style.transform = 'scale(1)';
        frame.style.opacity = '1';
    }, 500);

    // Efecto de dibujo de líneas
    const lines = document.querySelectorAll('.frame div');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.width = '100%';
            line.style.height = '100%';
        }, index * 200 + 500);
    });

    // Selecciona todos los proyectos y les agrega un evento de clic
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", function () {
            // Si ya está expandido, lo cerramos
            if (this.classList.contains("expanded")) {
                this.classList.remove("expanded");
                return;
            }

            // Cerramos los demás proyectos antes de expandir el nuevo
            document.querySelectorAll(".project").forEach(proj => {
                proj.classList.remove("expanded");
            });

            // Expandimos el proyecto seleccionado
            this.classList.add("expanded");
        });
    });
});


