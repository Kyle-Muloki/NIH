// Initialize odometers
const yearFoundedOdometer = new Odometer({
  el: document.querySelector('.Year-Founded'),
  value: 0,
  format: '',
});

const eventsOdometer = new Odometer({
  el: document.querySelector('.Events'),
  value: 0,
  format: '',
});

const eventParticipantsToDateOdometer = new Odometer({
  el: document.querySelector('.Event-Participants-to-Date'),
  value: 0,
  format: '(,ddd)',
});

const industriesRepresentedOdometer = new Odometer({
  el: document.querySelector('.Industries-represented'),
  value: 0,
  format: '',
});

// Start counting animation
yearFoundedOdometer.update(2011);
eventsOdometer.update(40);
eventParticipantsToDateOdometer.update("7,000");
industriesRepresentedOdometer.update(50);



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




