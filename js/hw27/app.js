
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        clearInterval(intervalId);
        startInterval();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        clearInterval(intervalId);
        startInterval();
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, 3000);
    }

    showSlide(currentIndex);
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    startInterval();

