
const ReviewsItem = (props) => {
  const item = props.item;
  /*
  rating: 0,
  review: 'something something',
  */

  let rating = 0;
  if (item.rating > 0) {
    rating = item.rating;
  }

  return (
    <>
      <div className="item">
        {item.rating}
        {item.review}
        <Typography component="legend">Rated</Typography>
        <Rating
          label="Rated"
          name="rating"
          value={rating}
          readOnly
        />
      </div>
    </>
  );
}

export default ReviewsItem;