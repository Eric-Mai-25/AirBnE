import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage({ hide }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) hide();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
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
      }
    );
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setEmail("demo1@user.io");
    setPassword("password");
    return dispatch(sessionActions.login({email: "demo1@user.io" , password: "password"}))
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="form-box">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={email && "filled"}>Email</label>
      </div>
      <div className="form-box">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className={password && "filled"}>Password</label>
      </div>
      <div className="containter container-two">
        <button className="login-button" type="submit">
          Log In
        </button>
      </div>

      <div className="login-line">
        <span>or</span>
      </div>
      <div className="containter container-two">
        <button className="login-button" onClick={handleDemoLogin}>
          Login Demo
        </button>
      </div>
    </form>
  );
}

export default LoginFormPage;
