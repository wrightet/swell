import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchReviews = (spotId) => (dispatch) => (
  APIUtil.fetchReviews(spotId)
    .then(reviews => dispatch(receiveReviews(reviews)))
    .catch(err  => console.log(err))
);

export const createReview = (spotId, reviewData) => (dispatch) => (
  APIUtil.createReview(spotId, reviewData)
    .then(review => dispatch(receiveReview(review)))
    .catch(err => console.log(err))
);

export const updateReview = (spotId, reviewId, reviewData) => (dispatch) => (
  APIUtil.updateReview(spotId, reviewId, reviewData)
    .then((review) => dispatch(receiveReview(review)))
);

export const deleteReview = (spotId, reviewId) => (dispatch) => (
  APIUtil.deleteReview(spotId, reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)