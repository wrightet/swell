import { 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
 } from "../actions/review_actions";

 const reviewReducer = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);
   switch(action.type) {
    case RECEIVE_REVIEWS:
      action.reviews.data.map(review => {
        newState[review._id] = review
      })
      return newState;
    case RECEIVE_REVIEW:
      newState[action.review.data._id] = action.review.data;
      return newState
    case REMOVE_REVIEW:
      debugger;
      delete newState[action.reviewId];
      return newState
    default:
      return state
   }
}

 export default reviewReducer;