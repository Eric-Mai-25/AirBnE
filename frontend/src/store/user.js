import csrfFetch from "./csrf";
import { allReviews } from "./review";
import { allReservations } from "./reserve";

export const RECEIVE_USER = "users/RECEIVE_USER";

const loadUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const getUser = (userId) => (state) => {
  return state.users ? state.users[userId] : null;
};

export const fetchUser = (guestId) => async (dispatch) => {
    console.log("here")
  const response = await csrfFetch(`/api/users/${guestId}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(loadUser(data.user));
    dispatch(allReviews(data.reviews));
    dispatch(allReservations(data.reservations));
  }
};

const userReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return nextState;
  }
};

export default userReducer