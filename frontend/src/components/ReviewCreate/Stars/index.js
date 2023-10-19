import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Stars.css";

function Stars({ currRating, setData }) {
  const [rating, setRating] = useState(currRating);

  const handleClick = rate => (e) => {
    e.preventDefault()
    setRating(rate);
    setData(rate);
  };

  return (
    <>
      <form className="rate">
        <input  type="radio" id="star5" name="rate" value="5"  checked={rating === 5} />
        <label for="star5" title="text" >
          <BsFillStarFill onClick={handleClick(5)}/>
        </label>
        <input  type="radio" id="star4" name="rate" value="4"  checked={rating === 4}/>
        <label for="star4" title="text">
          <BsFillStarFill onClick={handleClick(4)}/>
        </label>
        <input  type="radio" id="star3" name="rate" value="3" checked={rating === 3}/>
        <label for="star3" title="text">
          <BsFillStarFill onClick={handleClick(3)}/>
        </label>
        <input  type="radio" id="star2" name="rate" value="2" checked={rating === 2} />
        <label for="star2" title="text">
          <BsFillStarFill onClick={handleClick(2)}/>
        </label>
        <input  type="radio" id="star1" name="rate" value="1" checked={rating === 1}/>
        <label for="star1" title="text">
          <BsFillStarFill onClick={handleClick(1)}/>
        </label>
      </form>
    </>
  );
}

export default Stars;
