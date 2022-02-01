import { dummyReviews, dummyTours } from "../utils/dummy-data";

let counter = 0;

const initialState = {
  route: 'HOME',
  routeFreshness: 0,
  drawerOpened: false,
  toursData: {
    data: dummyTours,
    fetching: false
  },
  reviewsData: {
    data: dummyReviews,
    fetching: false
  },
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ROUTE_SET':
      counter++
      return {
        ...state,
        route: action.payload,
        routeFreshness: counter
      };

    case 'DRAWER_OPEN':
      return {
        ...state,
        drawerOpened: true
      };

    case 'DRAWER_CLOSE':
      return {
        ...state,
        drawerOpened: false
      };

    default:
      return state
  }

};

export default rootReducer;