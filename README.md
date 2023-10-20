# Airbne

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="33"/><img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" height="33" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="33"/><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" height="33"/><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" height="33" /><img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" height="33"/><img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" height="33"/><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="33"/><img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" height="33" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="33"/> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="33"/><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" height="33" />

## Table of Contents
- [Overview](#overview)
- [Live Site](#live-site)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
  - [User Authentication](#user-authentication)
  - [Reservations](#reservations)
  - [Reviews](#reviews)
- [Challenges Faced](#challenges-faced)

## Overview
This project is an Airbnb clone, a web application that connects travelers with hosts who offer lodging, primarily homestays, and tourism experiences. It provides a platform for users to discover and book accommodations worldwide. Finally, you will also be able to create reviews and view the listings you have reserved. 

## Live Site
Check out the live site [here]([https://www.airbnb-clone.com](https://airbne.onrender.com/)).

## Technologies Used
- **Frontend**: React, Redux, HTML, CSS
- **Backend**: Postgresql, Rails
- **Authentication**: Csrf
- **Image Upload**: Amazon S3
- **Deployment**: Render.com

## Key Features

### User Authentication
One of the core features is user authentication. Users can sign up, log in, and create an account. 

### Reservations
The next core feature is being able to create a reservation for the home you have taken a liking too. Allowing the user to set up dates and number of guests. Also, it requires the user to be logged as who can really make a reservation without knowing who they are. 

### Reviews
The biggest functioning feature is going to be the Reviews. Users are able to create, read, update, and delete their reviews as well as being able to see the reviews for the home they are currently looking at. Also restricting the user from deleting and editing other user's reviews by adjusting the location of access by showing their reviews on their trip advisory page.

### Challenges Faced 
One challenge that I faced ensuring that the users were able to get all the correct data and filter that data through jbuilder. Especially in the case of my trip advisory page. The user is able to see all their reviews and reservations on one page as well as being able to be redirected to the home where they left a review or reserve. To combat this my jbuilder became quite complex to fully utilize the tables that were combined through the joins table. Below is an example of a simple and complex jbuilder that I devised to get the information in needed.

```ruby

json.user do
  json.extract! @user, :id, :email, :username, :phone_number, :profile_picture
end

reviews = @user.reviews.includes(:author)

json.reviews do
  reviews.each do |review|
    json.set! review.id do
      json.merge! review.attributes
    end
  end
end

reservations = @user.reservations.includes(:guest)

json.reservations do
  reservations.each do |reservation|
    json.set! reservation.id do
      json.merge! reservation.attributes
      json.homeTitle reservation.home.title
      json.photoUrls reservation.home.images.attached? ? reservation.home.images.map { |photo| url_for(photo) } : []
    end
  end
end

```

And here is a simpler one for my home show page 

```ruby
json.home do
  json.merge! @home.attributes
  json.photoUrls @home.images.attached? ? @home.images.map { |photo| url_for(photo) } : []
end


reviews = @home.reviews.includes(:home)

json.reviews do
  reviews.each do |review|
    json.set! review.id do
      json.merge! review.attributes
      json.username review.author.username
      json.profile review.author.profile_picture
    end
  end
end


```

**Solution:** Implementation of the jbuilder was an essential part of the process of showing the correct data as well as only requiring the things that were needed for the page that I was working on. 

**Example code:** 

There was a lot of code management  on my part so there were a lot of components that were built to do a certain thing. In my case, I was proud of a lot of different components but one of the components that I was especially proud of was the reserve window. It might not look that fancy, but the ability for the user to see certain information was crucial and required me to do a bit of logic.

```javascript

function HomeShowMainRight({ home, rating, numReview }) {
  const dispatch = useDispatch();
  const history = useHistory();

  let today = getDate(0);
  let tommorrow = getDate(2);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tommorrow);

  const [guests, setGuests] = useState(0);
  const [numNights, setNumNights] = useState(2);
  const [price, setPrice] = useState(home.nightPrice * numNights);

  const data = {
    checkIn,
    checkOut,
    guests,
  };


  const handleCheckIn = (e) => {
    setCheckIn(e.target.value);
    let daysBetween = Math.floor(
      (Date.parse(checkOut) - Date.parse(e.target.value)) / 86400000
    );
    setNumNights(daysBetween);
    setPrice(home.nightPrice * numNights);
  };
  const handleCheckOut = (e) => {
    setCheckOut(e.target.value);
    let daysBetween = Math.floor(
      (Date.parse(e.target.value) - Date.parse(checkIn)) / 86400000
    );
    setNumNights(daysBetween);
    setPrice(home.nightPrice * numNights);
  };
  const handleGuests = (e) => {
    setGuests(e.target.value);
  };

  const reserveToStore = (e) => {
    const data = {
      checkIn,
      checkOut,
      guests,
    };
    dispatch(addReservation(data));
  };

  return (
    <>
      <div className="reserve-box">
        <div className="reserve-header">
          <h3 className="reserve-header-price">${home.nightPrice} night</h3>

          <span className="reserve-header-rating">
            {rating !== "NaN" ? (
              <>
                <AiFillStar />
                <span className="reserve-rating">{rating} ·</span>
              </>
            ) : null}
            <span className="reserve-review"> {numReview} Reviews</span>
          </span>
        </div>
        <form className="modal-form">
          <div className="checkinout">
            <div className="reserve-form-box check-in">
              <input
                type="date"
                onChange={handleCheckIn}
                value={checkIn}
                required
              />
              <label className={"filled"}>Check-in</label>
            </div>
            <div className="reserve-form-box check-out">
              <input
                type="date"
                onChange={handleCheckOut}
                value={checkOut}
                required
              />
              <label className={"filled"}>Check-out</label>
            </div>
          </div>
          <div className="reserve-form-box guest">
            <input type="text" onChange={handleGuests} required />
            <label className={"filled"}>Guests</label>
          </div>
          <div>
            <Link to={`/stays/${home.id}`}>
              <button onClick={reserveToStore} className="login-button">
                Reserve
              </button>
            </Link>
          </div>
          <div></div>
          <div className="payment-warning">
            <span>You won't be charged yet</span>
          </div>
          <div className="pricing-data">
            <div className="night-sum">
              <span>
                ${home.nightPrice} x {numNights} nights
              </span>
              <span>${price}</span>
            </div>
            <div className="cleaning-box">
              <span>Cleaning fee</span>
              <span>$60</span>
            </div>
            <div className="service-box">
              <span>Airbnb service fee</span>
              <span>${Math.floor(price * 0.16)}</span>
            </div>
          </div>
          <div className="login-line"></div>
          <div className="total-price">
            <h3>Total before taxes</h3>
            <span>${price + 60 + Math.floor(price * 0.16)}</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default HomeShowMainRight;

function getDate(n) {
  var today = new Date();
  var dd = today.getDate() + n;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
}


```