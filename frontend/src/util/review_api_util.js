import axios from "axios";

// fetch all reviews for a surf spot
export const fetchReviews = (spotId) => (
  axios.get(`/api/spots/${spotId}/reviews`)
);

// create a review
export const createReview = (spotId, reviewData) => (
  axios.post(`/api/spots/${spotId}/reviews`, reviewData)
);

// update a review
export const updateReview = (spotId, reviewId, reviewData) => (
  axios.patch(`/api/spots/${spotId}/reviews/${reviewId}`, reviewData)
);

// delete a review
export const deleteReview = (spotId, reviewId) => (
  axios.delete(`/api/spots/${spotId}/reviews/${reviewId}`)
);