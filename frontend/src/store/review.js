import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = "reviews/RECIEVE_REVIEW";
export const ADD_REVIEW = "reviews/ADD_REVIEW";
export const CLEAR_REVIEW = "reviews/CLEAR_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

const load = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  };
};

export const add = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};
export const clear = () => {
  return {
    type: CLEAR_REVIEW,
  };
};

const remove = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId,
  };
};

export const getReview = (reviewId) => (state) => {
  return state.reviews ? state.reviews[reviewId] : null;
};

export const createReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/homes/${review.homeId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(load(review));
  }
};

export const editReview = (review) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/homes/${review.homeId}/reviews/${review.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const review = await response.json();
    dispatch(load(review));
  }
};

export const removeReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/reviews/${reviewId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (response.ok) {
    dispatch(remove(reviewId));
  }
};

const reviewReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case ADD_REVIEW:
      nextState.currentReview = action.review;
      return nextState;
    case CLEAR_REVIEW:
      nextState.currentReview = null;
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId]
      return nextState;
    default:
      return state;
  }
};

export default reviewReducer;
