let currentIndex = 0;

function slideLeft() {
    const slides = document.querySelectorAll('.slides img');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    slides[currentIndex].classList.add('active');
}

function slideRight() {
    const slides = document.querySelectorAll('.slides img');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    slides[currentIndex].classList.add('active');
}
