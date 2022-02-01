import { Rating, Typography } from "@mui/material";
import { calculateAverageRating } from "../utils/hiking-app-utils";

const ToursItem = (props) => {
  const item = props.item;
  const tourReviews = props.tourReviews;

  const averageRating = calculateAverageRating(tourReviews)

  return (
    <>
      <div className="item">
        <div>
          {item.name}
          {item.description}
          {item.date}
          {item.difficulty}
          {item.trail_length}
          {item.max_participants}
        </div>
        <div>
          Average rating: {averageRating}
          <Typography component="legend">Average rating</Typography>
          <Rating
            label="Average rating"
            name="rating"
            value={averageRating}
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default ToursItem;