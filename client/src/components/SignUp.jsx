import { Register } from "../stylemodules/SignUpStyles";
import signup from "../images/signup.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "../stylemodules/Style.module.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };
  const handlePost = async () => {
    if (confirm === pass) {
      await axios.post("http://localhost:3001/users", {
        email: email,
        password: pass,
      });
      setEmail("");
      setPass("");
      setConfirm("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <Register>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={signup} alt="signup_image" />
        </div>
        <div>
          <p>All Your Music.</p>
        </div>
        <div>
          <p>Anytime, anywhere</p>
        </div>
      </div>
      <div>
        <div>
          <p>Already Have an Account?</p>
          <button>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </button>
        </div>
        <div>
          <p>Welcome to JioSaavn.</p>
          <p>Sign up with your email address.</p>
        </div>
        <div>
          {error ? (
            <>
              <input
                className={styles.error}
                style={{ height: "43px" }}
                value="Please make sure your password matches!"
                type="text"
                placeholder="Wrong"
              />
              <input
                onChange={handleEmail}
                value={email}
                type="text"
                placeholder="Email Address"
              />
              <input
                onChange={handlePass}
                value={pass}
                type="password"
                placeholder="Password"
              />
              <input
                onChange={handleConfirm}
                value={confirm}
                type="password"
                placeholder="Confirm Password"
              />
              <button onClick={handlePost}>Continue</button>
            </>
          ) : (
            <>
              <input
                onChange={handleEmail}
                value={email}
                type="text"
                placeholder="Email Address"
              />
              <input
                onChange={handlePass}
                value={pass}
                type="password"
                placeholder="Password"
              />
              <input
                onChange={handleConfirm}
                value={confirm}
                type="password"
                placeholder="Confirm Password"
              />
              <button onClick={handlePost}>Continue</button>
            </>
          )}
        </div>
        <div>
          <p>
            By selecting ‘Continue’, you agree to jioSaavn’s{" "}
            <span>Terms of Service</span> and <span>Privacy Policy.</span>
          </p>
        </div>
        <div>
          <p>OR CONNECT WITH</p>
        </div>
        <div>
          <Link to="/mobile">
            <button>Mobile Number</button>
          </Link>
          <button>Facebook</button>
        </div>
      </div>
    </Register>
  );
};
