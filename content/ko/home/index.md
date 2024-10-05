<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Slider</title>
  <style>
    .slider-container {
      width: 80%;
      max-width: 600px;
      margin: auto;
      position: relative;
    }

    .slide {
      display: none;
      width: 100%;
    }

    .active {
      display: block;
    }

    .slider-container img {
      width: 100%;
      border-radius: 10px;
    }

    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 18px;
      border-radius: 50%;
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
    }

    .dot-container {
      text-align: center;
      margin-top: 10px;
    }

    .dot {
      height: 15px;
      width: 15px;
      margin: 0 5px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
    }

    .active-dot {
      background-color: #717171;
    }
  </style>
</head>
<body>

<div class="slider-container">
  <div class="slide active">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="slide">
    <img src="image2.jpg" alt="Image 2">
  </div>
  <div class="slide">
    <img src="image3.jpg" alt="Image 3">
  </div>

  <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
  <button class="next" onclick="changeSlide(1)">&#10095;</button>
</div>

<div class="dot-container">
  <span class="dot active-dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>

<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  function changeSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active-dot', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active-dot';
  }
</script>

</body>
</html>
