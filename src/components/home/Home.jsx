import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div
      className={
        toggle ? "container-home right-panel-active" : "container-home"
      }
    >
      <div
        className={
          open
            ? "form-container sign-up-container"
            : "form-container sign-up-container register"
        }
      >
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="dieuhuong">
            Do you have Account ? <span onClick={()=>{setOpen(!open)}}> Login</span>{" "}
          </div>
          <button>Register</button>
        </form>
      </div>

      <div className="form-container sign-in-container loginPage">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </Link>
            <Link to="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="dieuhuong">
            Do you no Account ? <span onClick={()=>{setOpen(!open)}}> Register</span>{" "}
          </div>
          <button>Login</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
