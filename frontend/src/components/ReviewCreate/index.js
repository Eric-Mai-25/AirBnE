import "./ReviewCreate.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createReview } from "../../store/review";

function ReviewCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { homeId } = useParams();
  const user = useSelector((state) => state.session.user.id);

  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()
  let year =date.getFullYear()
  const [publicComment, usePublicComment] = useState();
  const [privateComment, usePrivateComment] = useState();
  const [cleaniness, setcleaniness] = useState();
  const [communication, setCommunication] = useState();
  const [checkIn, setCheckIn] = useState();
  const [accuracy, setAccuracy] = useState();
  const [location, setLocation] = useState();
  const [value, setValue] = useState();
  const [recommned, setRecommend] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      author_id: user,
      home_id: homeId,
      public_comment: "Dang this works work",
      private_comment: "Bam this works",
      cleanliness: 4,
      communication: 4,
      check_in: 3,
      accuracy: 3,
      location: 2,
      value: 2,
      review_date: `${year}-${month}-${day}`,
      // recommned: true,
    };
    dispatch(createReview(reviewData));
  };

  return (
    <>
      <div className="review-box">
        <h2>Rate & Review</h2>
        <div className="review-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input />
              <label>Public Comment</label>
            </div>
            <div>
              <input />
              <label>Private Comment</label>
            </div>
            <div>
              <input />
              <label>Cleaniness</label>
            </div>
            <div>
              <input />
              <label>Communication</label>
            </div>
            <div>
              <input />
              <label>Check in</label>
            </div>
            <div>
              <input />
              <label>Accuracy</label>
            </div>
            <div>
              <input />
              <label>Location</label>
            </div>
            <div>
              <input />
              <label>Value</label>
            </div>
            <div>
              <input />
              <label>Would you reccomend this to host?</label>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default ReviewCreate;
