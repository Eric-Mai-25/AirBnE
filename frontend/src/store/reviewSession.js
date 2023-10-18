export const ADD_REVIEW = "reviews/ADD_REVIEW";
export const CLEAR_REVIEW = "reviews/CLEAR_REVIEW";


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

  const reviewSessionbReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
  
    switch (action.type) {

      case ADD_REVIEW:
        nextState.currentReview = action.review;
        return nextState;
      case CLEAR_REVIEW:
        nextState.currentReview = null;
        return nextState;
      default:
        return state;
    }
  };

  export default reviewSessionbReducer