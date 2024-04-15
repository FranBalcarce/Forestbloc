document.addEventListener('DOMContentLoaded', function () {
    const carruselContainer = document.querySelector('.carrusel-images');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        const translateValue = -index * 100 + '%';
        carruselContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carruselContainer.children.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carruselContainer.children.length) % carruselContainer.children.length;
        showImage(currentIndex);
    }

    // Navegación manual al hacer clic en los botones
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Llama a la función showImage inicialmente para mostrar la primera imagen
    showImage(currentIndex);
});
