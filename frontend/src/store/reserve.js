import csrfFetch from "./csrf";

export const RECEIVE_RESERVATION = "reservations/RECEIVE_RESERVATION";
export const ADD_RESERVATION = "reservations/ADD_RESERVATION";
export const CLEAR_RESERVATION = "reservations/CLEAR_RESERVATION";

const load = (reservation) => {
  return {
    type: RECEIVE_RESERVATION,
    reservation,
  };
};

export const addReservation = (reserve) => {
  return {
    type: ADD_RESERVATION,
    reserve,
  };
};

export const clearReservation = (reserve) => {
  return {
    type: CLEAR_RESERVATION,
    reserve,
  };
};

export const getReservation = (reserveId) => (state) => {
  return state.reservations ? state.reservations[reserveId] : null;
};

export const createReservation = (reservation) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/homes/${reservation.homeId}/reservations`,
    {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (response.ok) {
    const reservation = await response.json();
    dispatch(load(reservation));
  }
};

const reserveReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_RESERVATION:
      nextState[action.reservation.id] = action.reservation;
      return nextState;
    case ADD_RESERVATION:
      nextState.reserveData = action.reserve;
      return nextState;
    case CLEAR_RESERVATION:
      nextState.reserveData = null;
      return nextState;
    default:
      return state;
  }
};

export default reserveReducer;
