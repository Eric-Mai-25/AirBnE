import "./ReviewCreate.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { createReview, editReview } from "../../store/review";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReviewCreate() {
  const dispatch = useDispatch();
  const { homeId } = useParams();
  const history = useHistory();
  const currReview = useSelector((state) => state.reviews.currentReview);
  const user = useSelector((state) => state.session.user.id);

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const [publicComment, usePublicComment] = useState();
  const [privateComment, usePrivateComment] = useState();
  const [cleaniness, setcleaniness] = useState();
  const [communication, setCommunication] = useState();
  const [checkIn, setCheckIn] = useState();
  const [accuracy, setAccuracy] = useState();
  const [location, setLocation] = useState();
  const [value, setValue] = useState();
  const [recommned, setRecommend] = useState();

  const handleCreate = (e) => {
    // e.preventDefault();
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
    // history.push(`homes/${homeId}`);
  };

  const handleEdit = (e) => {
    // e.preventDefault();
    const reviewData = {
      id: currReview.id,
      author_id: user,
      home_id: homeId,
      public_comment: "This is a patch",
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
    dispatch(editReview(reviewData));
    // history.push(`homes/${homeId}`);
  };

  let formSession;

  if (!currReview) {
    formSession = (
      <>
        <h2>Rate & Review</h2>
        <div className="review-form">
          <form>
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
              <Link to={`/homes/${homeId}`}>
                <button onClick={handleCreate} className="login-button">
                  {" "}
                  Submit{" "}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    formSession = (
      <>
        <h2>Edit your review</h2>
        <div className="review-form">
          <form >
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
              <Link to={`/homes/${homeId}`}>
                <button onClick={handleEdit} className="login-button">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="review-box">{formSession}</div>
    </>
  );
}

export default ReviewCreate;
