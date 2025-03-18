
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close-modal");

    // Seleccionar todas las imágenes dentro de las tarjetas de hamburguesas
    document.querySelectorAll(".burger-card img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add("show");
            }, 10); 
            modalImg.src = this.src;
        });
    });

    // Cerrar modal al hacer clic en la "X"
    closeModal.addEventListener("click", function() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });

    // Cerrar modal si se hace clic fuera de la imagen
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });

    // Obtener el año actual y actualizar el footer
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
