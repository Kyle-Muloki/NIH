// Function to create Odometer instance
const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
    duration: 2000, // Duration of the animation in milliseconds
    format: '', // Empty string format for plain numbers
  });

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        odometer.update(value);
        observer.unobserve(el); // Stop observing once the element is in view
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

// Call createOdometer for each odometer element on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  const yearFoundedOdometer = document.querySelector(".Year-Founded.odometer");
  createOdometer(yearFoundedOdometer, 2011);

  const eventsOdometer = document.querySelector(".Events.odometer");
  createOdometer(eventsOdometer, 40);

  const eventParticipantsToDateOdometer = document.querySelector(".Event-Participants-to-Date.odometer");
  createOdometer(eventParticipantsToDateOdometer, 7000);

  const industriesRepresentedOdometer = document.querySelector(".Industries-represented.odometer");
  createOdometer(industriesRepresentedOdometer, 50);
});

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.brand-logo');

let counter = 1;
const slideWidth = slideItems[0].clientWidth;

function startSlider() {
  setInterval(() => {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = `translateX(-${slideWidth * counter}px)`;

    counter++;
    if (counter === slideItems.length) {
      setTimeout(() => {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        counter = 1;
      }, 1000);
    }
  }, 2000); // Change slide every 3 seconds
}
document.addEventListener('DOMContentLoaded', () => {
  startSlider();
});

document.addEventListener("DOMContentLoaded", function() {
  // Find the toggle link and form elements
  const toggleLink = document.getElementById("toggleFormButton");
  const form = document.querySelector("[data-eo-form-id='6ba78e66-0b79-11ef-9d4a-e5c19b11a924']");

  // Add click event listener to the toggle link
  toggleLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    form.classList.toggle("visible"); // Toggle the visibility of the form
  });
});




