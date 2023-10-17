import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = "reviews/RECIEVE_REVIEW";

const load = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};

export const getReview = (reviewId) => (state) => {
  return state.reviews ? state.reviews[reviewId] : null;
};

export const createReview = (review) => async (dispatch) => {
    console.log('Initiate Dispatch')
  const response = await csrfFetch(`/api/homes/${review.homeId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log("finish dispatch")
  if (response.ok) {
    const review = await response.json();
    console.log(review, 'Review Data')
    dispatch(load(review));
  }
};

const reviewReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    default:
      return state;
  }
};

export default reviewReducer;
