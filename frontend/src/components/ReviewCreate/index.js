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
  const currReview = useSelector((state) => state.reviewSession.currentReview);
  const user = useSelector((state) => state.session.user.id);

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const [publicComment, setPublicComment] = useState(
    !currReview ? null : currReview.publicComment
  );
  const [privateComment, setPrivateComment] = useState(
    !currReview ? null : currReview.privateComment
  );
  const [cleaniness, setCleaniness] = useState(
    !currReview ? 0 : currReview.cleanliness
  );
  const [communication, setCommunication] = useState(
    !currReview ? 0 : currReview.communication
  );
  const [checkIn, setCheckIn] = useState(
    !currReview ? 0 : currReview.checkIn
  );
  const [accuracy, setAccuracy] = useState(
    !currReview ? 0 : currReview.accuracy
  );
  const [location, setLocation] = useState(
    !currReview ? 0 : currReview.location
  );
  const [value, setValue] = useState(!currReview ? 0 : currReview.value);
  // const [recommned, setRecommend] = useState();

  const handleCreate = (e) => {
    // e.preventDefault();
    const reviewData = {
      author_id: user,
      home_id: homeId,
      public_comment:  publicComment,
      private_comment: privateComment,
      cleanliness: cleaniness,
      communication: communication,
      check_in: checkIn,
      accuracy: accuracy,
      location: location,
      value: value,
      review_date: `${year}-${month}-${day}`,
    };
    dispatch(createReview(reviewData));
  };

  const handleEdit = (e) => {
    const reviewData = {
      id: currReview.id,
      author_id: user,
      home_id: homeId,
      public_comment: publicComment,
      private_comment: privateComment,
      cleanliness: cleaniness,
      communication: communication,
      check_in: checkIn,
      accuracy: accuracy,
      location: location,
      value: value,
      review_date: `${year}-${month}-${day}`,
    };
    dispatch(editReview(reviewData));
  };

  let formSession;
  let submissionSession;

  if (!currReview) {
    formSession = (
      <>
        <h2>Rate & Review</h2>
      </>
    );
    submissionSession = (
      <Link to={`/homes/${homeId}`}>
        <button onClick={handleCreate} className="login-button">
          Submit
        </button>
      </Link>
    );
  } else {
    formSession = (
      <>
        <h2>Edit your review</h2>
      </>
    );
    submissionSession = (
      <Link to={`/homes/${homeId}`}>
        <button onClick={handleEdit} className="login-button">
          Submit
        </button>
      </Link>
    );
  }

  return (
    <>
      <div className="review-box">
        {formSession}
        <div className="review-form">
          <form>
            <div>
              <input
                onChange={(e) => setPublicComment(e.target.value)}
                placeholder={publicComment}
              />
              <label>Public Comment</label>
            </div>
            <div>
              <input
                onChange={(e) => setPrivateComment(e.target.value)}
                placeholder={privateComment}
              />
              <label>Private Comment</label>
            </div>
            <div>
              <input
                onChange={(e) => setCleaniness(e.target.value)}
                placeholder={cleaniness}
              />
              <label>Cleaniness</label>
            </div>
            <div>
              <input
                onChange={(e) => setCommunication(e.target.value)}
                placeholder={communication}
              />
              <label>Communication</label>
            </div>
            <div>
              <input
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder={checkIn}
              />
              <label>Check in</label>
            </div>
            <div>
              <input
                onChange={(e) => setAccuracy(e.target.value)}
                placeholder={accuracy}
              />
              <label>Accuracy</label>
            </div>
            <div>
              <input
                onChange={(e) => setLocation(e.target.value)}
                placeholder={value}
              />
              <label>Location</label>
            </div>
            <div>
              <input
                onChange={(e) => setValue(e.target.value)}
                placeholder={location}
              />
              <label>Value</label>
            </div>
            {/* <div>
              <input />
              <label>Would you reccomend this to host?</label>
            </div> */}

            <div>
              {submissionSession}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReviewCreate;
