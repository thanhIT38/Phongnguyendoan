document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dots-container");

  let slideIndex = 0;

  function showSlides() {
      slides.forEach((slide) => (slide.style.display = "none"));
      slides[slideIndex].style.display = "flex";
  }

  function createDots() {
      for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement("span");
          dot.classList.add("dot");
          dotsContainer.appendChild(dot);

          dot.addEventListener("click", function () {
              slideIndex = i;
              showSlides();
              updateDots();
          });
      }
  }

  function updateDots() {
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
  }

  function plusSlides(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) {
          slideIndex = 0;
      } else if (slideIndex < 0) {
          slideIndex = slides.length - 1;
      }
      showSlides();
      updateDots();
  }

  showSlides();
  createDots();

  setInterval(function () {
      plusSlides(1);
  }, 3000);
});



// chạy số tự động 
document.addEventListener("DOMContentLoaded", function() {
  // Function to animate the counter
  function animateCounter(element, targetValue) {
      let currentValue = 0;
      const increment = 1;
      const interval = 50; // milliseconds

      const intervalId = setInterval(function() {
          currentValue += increment;
          element.textContent = currentValue;

          if (currentValue >= targetValue) {
              clearInterval(intervalId);
              element.textContent = targetValue;
          }
      }, interval);
  }

  // Call animateCounter for each counter element
  const counterElements = document.querySelectorAll(".counter-value");
  counterElements.forEach(function(counterElement) {
      const targetValue = parseInt(counterElement.getAttribute("data-count"), 10);
      animateCounter(counterElement, targetValue);
  });
});