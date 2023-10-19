import "./ReviewCreate.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { createReview, editReview } from "../../store/review";
import { BsChevronLeft } from "react-icons/bs";
import "./ReviewCreate.css";
import Stars from "./Stars";

function ReviewCreate() {
  const dispatch = useDispatch();
  const { homeId } = useParams();
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
  const [checkIn, setCheckIn] = useState(!currReview ? 0 : currReview.checkIn);
  const [accuracy, setAccuracy] = useState(
    !currReview ? 0 : currReview.accuracy
  );
  const [location, setLocation] = useState(
    !currReview ? 0 : currReview.location
  );
  const [value, setValue] = useState(!currReview ? 0 : currReview.value);
  // const [recommned, setRecommend] = useState();

  const handleCreate = (e) => {
    const rating = (cleaniness + communication + checkIn + accuracy + location + value) / 6;

    const reviewData = {
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
      rating: Number(rating).toFixed(1),
      review_date: `${year}-${month}-${day}`,
    };
    dispatch(createReview(reviewData));
  };

  const handleEdit = (e) => {
    const rating = (cleaniness + communication + checkIn + accuracy + location + value) / 6;

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
      rating: rating,
      review_date: `${year}-${month}-${day}`,
    };
    dispatch(editReview(reviewData));
  };

  const handleSet = (field) => (e) =>{
    switch (field) {
      case "cleaniness":
        setCleaniness(e);
        break;
      case "communication":
        setCommunication(e);
        break;
      case "checkIn":
        setCheckIn(e);
        break;
      case "accuracy":
        setAccuracy(e);
        break;
      case "location":
        setLocation(e);
        break;
      case "value":
        setValue(e);
        break;

      default:
        break;
    }
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
        <div className="review-box-main">
          <div className="review-box-left">
            <div className="title-back">
              <Link to={`/homes/${homeId}`} className="review-back-link">
                <BsChevronLeft className="back-button" />
              </Link>
              {formSession}
            </div>
          </div>
          <div className="review-box-right">
            <div className="review-form">
              <form>
                <div>
                  <div>
                    <div className="label-title">
                      <h2>Describe your experience.</h2>
                      <p>(required)</p>
                    </div>
                    <div>
                      <span className="title-desc">
                        Your review will be public
                      </span>
                    </div>
                  </div>
                  <textarea
                    className="review-text-area"
                    type="text"
                    onChange={(e) => setPublicComment(e.target.value)}
                    placeholder={
                      publicComment
                        ? publicComment
                        : "What was it like to stay here?"
                    }
                  />
                </div>
                <div>
                  <div>
                    <div className="label-title">
                      <h2>Private guest feedback</h2>
                    </div>
                    <div>
                      <span className="title-desc">
                        This review is just for your guest.We won't make it
                        public.
                      </span>
                    </div>
                  </div>
                  <textarea
                    className="review-text-area"
                    type="text"
                    onChange={(e) => setPrivateComment(e.target.value)}
                    placeholder={
                      privateComment
                        ? privateComment
                        : "Thank your host or offer some tips to help them improve for their next guests"
                    }
                  />
                </div>
                <div className="star-rating-box">
                  <div>
                    <h2>Cleaniness</h2>
                    <span>Was the location clean upon arrival?</span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={cleaniness}
                      setData={handleSet("cleaniness").bind(this)}
                    />
                  </div>
                </div>

                <div className="star-rating-box">
                  <div>
                    <h2>Communication</h2>
                    <span>How clearly did the host communicate with you?</span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={communication}
                      setData={handleSet("communication").bind(this)}
                    />
                  </div>
                </div>

                <div className="star-rating-box">
                  <div>
                    <h2>Check in</h2>
                    <span>How did your check in go?</span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={checkIn}
                      setData={handleSet("checkIn").bind(this)}
                    />
                  </div>
                </div>

                <div className="star-rating-box">
                  <div>
                    <h2>Accuracy</h2>
                    <span>How accurate was the posting to the location?</span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={accuracy}
                      setData={handleSet("accuracy").bind(this)}
                    />
                  </div>
                </div>

                <div className="star-rating-box">
                  <div>
                    <h2>Location</h2>
                    <span>
                      How comfortable were you living in that location?
                    </span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={location}
                      setData={handleSet("location").bind(this)}
                    />
                  </div>
                </div>

                <div className="star-rating-box">
                  <div>
                    <h2>Value</h2>
                    <span>Did you think it was worth the price?</span>
                  </div>
                  <div className="stars">
                    <Stars
                      currRating={value}
                      setData={handleSet("value").bind(this)}
                    />
                  </div>
                </div>
                {/* <div>
              <input />
              <label>Would you reccomend this to host?</label>
            </div> */}

                <div>{submissionSession}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCreate;
