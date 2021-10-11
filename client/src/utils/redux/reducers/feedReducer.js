import { INIT_FEED, EDIT_FEED } from "../actionTypes/actionTypes";

const feedReducer = (state = {feed: []}, action) => {
switch (action.type) {
  case INIT_FEED:
    return { ...state, feed: action.payload };
  case EDIT_FEED:
    const index = state.feed.findIndex(
      (el) => el._id === action.payload._id);
      const newArray = [...state.feed];
      newArray[index] = {
        ...action.payload
      };
      return { ...state, feed: newArray };
  default:
    return state;
}
}

export default feedReducer
