let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    setInterval(showSlides, 3000); // 자동 슬라이드 전환 (원하는 시간 설정)
});
