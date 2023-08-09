function generateReviewCards() {
    const reviewsContainer = document.querySelector('#reviews-container');
    reviewsContainer.innerHTML = '';
    reviewData.forEach((review) => {
      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = `
        <h3>${review.name}</h3>
        <p>Date: ${review.date}</p>
        <p>Rating: ${getStarRating(review.rating)}</p>
        <p>${review.reviewText}</p>
      `;
      reviewsContainer.appendChild(card);
    });
  }
  
  function getStarRating(rating) {
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  }
  
  document.addEventListener('DOMContentLoaded', generateReviewCards);
  
  const addReviewForm = document.querySelector('#add-review-form');
  addReviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = addReviewForm.querySelector('input#name');
    const dateInput = addReviewForm.querySelector('input#date');
    const ratingInput = addReviewForm.querySelector('input#rating');
    const reviewTextInput = addReviewForm.querySelector('textarea#reviewText');
    const name = nameInput.value;
    const date = dateInput.value;
    const rating = parseInt(ratingInput.value, 10);
    const reviewText = reviewTextInput.value;
    const newReview = {
      name: name,
      date: date,
      rating: rating,
      reviewText: reviewText,
    };
    reviewData.push(newReview);
    generateReviewCards();
    addReviewForm.reset();
  });
  
  
  