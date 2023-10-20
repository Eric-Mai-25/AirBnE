import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  // const [profile_picture, setProfilePicture] = useState("img.url");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          phone_number,
          profile_picture: "https://xsgames.co/randomusers/avatar.php?g=male",
          username,
          password,
        })
      ).catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <div className="form-box">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={email && 'filled'}>Email</label>
      </div>
      <div className="form-box">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className={username && 'filled'}>Username</label>
      </div>
      <div className="form-box">
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label className={phone_number && 'filled'}>Phone Number</label>
      </div>
      <div className="form-box">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className={password && 'filled'}>Password</label>
      </div>
      <div className="form-box">
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label className={confirmPassword && 'filled'} >Confirm Password</label>
      </div>
      <div className="containter container-two">
        <button className="login-button" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignupFormPage;
