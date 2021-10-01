import { OtpLog } from "../../stylemodules/OtpStyles";
import signup from "../../images/signup.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Otp = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/home");
  };
  return (
    <OtpLog>
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
          <p>Enter your 6-digit code.</p>
          <p>We've sent your code tothe phone number.</p>
          <p>
            +919868551551 Didn't get it? <span>Resend Code</span>
          </p>
        </div>
        <div>
          <input
            // onchange={handleNumber}
            type="text"
            placeholder="Enter Code"
          />
          <button onClick={handleLogin}>Login</button>
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
    </OtpLog>
  );
};
