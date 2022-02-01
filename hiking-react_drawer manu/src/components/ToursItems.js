import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionReviewsDataNeeded, actionToursDataNeeded } from "../redux/actions";
import { selectAllReviewsForSingleTour } from "../utils/hiking-app-utils";
import { filterTours } from "../utils/tours-filter-utils";
import { CircularProgress } from "@mui/material";
import ToursItem from "./ToursItem";
import FormTourFilter from "./FormTourFilter";

const ToursItems = (props) => {
  const toursData = useSelector((state) => state.toursData);
  const reviewsData = useSelector((state) => state.reviewsData);
  const routeFreshness = useSelector((state) => state.routeFreshness);

  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({});

  useEffect(() => {
    // refresh data
    dispatch(actionToursDataNeeded());
    dispatch(actionReviewsDataNeeded());
  }, [routeFreshness]);

  const _cb = (filterState) => {
    console.log('cb');
    console.log(filterState);
    setFilterParams({ ...filterState });
  };

  let jsxData = null;
  let jsxSpinner = null;
  if (toursData.fetching) {
    jsxSpinner = (
      <CircularProgress />
    );
  } else {
    console.log(toursData)
    const arr = toursData.data;
    const filteredTours = filterTours(filterParams, arr);
    jsxData = filteredTours.map((item, index) => {
      const tourId = item._id;
      const tourReviews = selectAllReviewsForSingleTour(tourId, reviewsData.data);
      return (
        <ToursItem
          key={index}
          item={item}
          tourReviews={tourReviews}
        />
      )
    });
  }

  return (
    <>
      <h2>Browse tours</h2>
      <FormTourFilter cb={_cb} />
      <div className="items">
        {jsxData}
      </div>
      {jsxSpinner}
    </>
  );
}

export default ToursItems;