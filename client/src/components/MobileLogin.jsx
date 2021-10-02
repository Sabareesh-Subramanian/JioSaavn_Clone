import { MobLog } from "../stylemodules/MobileLoginStyle";
import signup from "../images/signup.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MobileLogin = () => {
  const [number, setNumber] = useState("");
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleLogin = () => {
    console.log(number);
  };
  return (
    <MobLog>
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
          <p>Don't have a JioSaavn account yet?</p>
          <button>
            <Link to="/signup">
              <span>Signup</span>
            </Link>
          </button>
        </div>
        <div>
          <p>Welcome to JioSaavn.</p>
          <p>Login or signup with your mobile number.</p>
        </div>
        <div>
          <input
            onchange={handleNumber}
            type="text"
            placeholder="Enter your mobile number"
          />
          <button onClick={handleLogin}>Continue</button>
        </div>
        <div>
          <p>
            Select 'Continue' to give consent to JioSaavn's{" "}
            <span>Terms of Service</span> and acknowledge that you have read and
            understood the <span>Privacy Policy</span>. An SMS may be sent to
            authenticate your account, and message and data rates may apply.
          </p>
        </div>
        <div>
          <p>OR CONNECT WITH</p>
        </div>
        <div>
          <Link to="/login">
            <button>Email</button>
          </Link>
          <button>Facebook</button>
        </div>
      </div>
    </MobLog>
  );
};
