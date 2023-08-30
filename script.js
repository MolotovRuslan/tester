// Get all FAQ items and the details container
const faqItems = document.querySelectorAll('.faq-item');
const detailsTitle = document.querySelector('.details-title');
const detailsContent = document.querySelector('.details-content');

faqItems.forEach(item => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');

  question.addEventListener('click', () => {
    // Hide other answers
    faqItems.forEach(faqItem => {
      const faqAnswer = faqItem.querySelector('.answer');
      if (faqAnswer !== answer) {
        faqAnswer.classList.remove('show-answer');
      }
    });

    // Toggle "show-answer" class to trigger the animation for the clicked question
    answer.classList.toggle('show-answer');

    // Update the details container with the selected answer
    // detailsTitle.textContent = 'Answer:';
    detailsContent.textContent = answer.textContent;

    // Apply the slideInFromBottom animation to detailsContent
    detailsContent.style.opacity = '0'; // Set opacity to 0 before animation
    detailsContent.style.transform = 'translateY(20px)'; // Move content down before animation

    // Animate opacity and transform
    detailsContent.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 500, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing function
        fill: 'forwards' // Maintain final state after animation
      }
    );
  });
});
