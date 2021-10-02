import { OtpLog } from "../../stylemodules/OtpStyles";
import signup from "../../images/signup.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { OtpContext } from "../../contexts/OtpContext";

export const Otp = () => {
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const { mynumber } = useContext(OtpContext);
  const { final } = useContext(OtpContext);
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleLogin = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then(() => {
        history.replace("/home");
      })
      .catch((err) => {
        alert("Wrong code");
      });
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
          <p>We've sent your code to the phone number.</p>
          <p>
            {mynumber} Didn't get it?{" "}
            <span style={{ color: "#2bc5b4" }}>Resend Code</span>
          </p>
        </div>
        <div>
          <input onChange={handleChange} type="text" placeholder="Enter Code" />
          <button onClick={handleLogin}>Login</button>
        </div>
        <div>
          <p>
            Select 'Continue' to give consent to JioSaavn's
            <span>Terms of Service</span> and acknowledge that you have read and
            understood the <span>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </OtpLog>
  );
};
