import {
  RESTAURANT_LIST_FAIL,
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
} from '../constants/restaurantConstants';

export const restaurantListReducer = (state = { restaurant: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_SUCCESS:
      return { restaurant: action.payload };
    case RESTAURANT_LIST_FAIL:
      return { restaurant: action.payload };
    default:
      return state;
  }
};
