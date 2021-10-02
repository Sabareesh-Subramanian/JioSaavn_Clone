import { MobLog } from "../../stylemodules/MobileLoginStyle";
import signup from "../../images/signup.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { firebase, auth } from "../../firebase";
import { useContext } from "react";
import { OtpContext } from "../../contexts/OtpContext";

export const MobileLogin = () => {
  const { mynumber } = useContext(OtpContext);
  const { handleNumber } = useContext(OtpContext);
  const { handleFinal } = useContext(OtpContext);
  const history = useHistory();
  const handleLogin = () => {
    if (mynumber === "" || mynumber.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        handleFinal(result);
        alert("code sent");
        setInterval(() => {
          history.push("/otp");
        }, 1500);
      })
      .catch((err) => {
        alert(err);
      });
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
            onChange={(e) => {
              handleNumber(e);
            }}
            type="text"
            placeholder="Enter your mobile number"
          />
          <div id="recaptcha-container"></div>
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
