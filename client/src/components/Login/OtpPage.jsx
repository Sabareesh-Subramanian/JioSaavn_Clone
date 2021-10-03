import { OtpLog } from "../../stylemodules/OtpStyles";
import signup from "../../images/signup.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OtpContext } from "../../contexts/OtpContext";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Homepage } from "../Homepage/Homepage";
// import { auth } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export const Otp = ({ song, loadingFlag }) => {
  // const history = useHistory();
  // const [otp, setOtp] = useState("");
  const { mynumber } = useContext(OtpContext);
  const history = useHistory();
  // const { final } = useContext(OtpContext);
  // const [user] = useAuthState(auth);

  // const handleChange = (e) => {
  //   setOtp(e.target.value);
  // };
  const handleOtp = () => {
    // if (otp === null || final === null) return;
    // final
    //   .confirm(otp)
    //   .then((result) => {
    //     //success
    //   })
    //   .catch((err) => {
    //     alert("Wrong code");
    //   });
    history.push("/home");
  };
  return (
    <>
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
            <input
              // onChange={handleChange}
              type="password"
              placeholder="Enter Code"
            />
            <button onClick={handleOtp}>Login</button>
          </div>
          <div>
            <p>
              Select 'Continue' to give consent to JioSaavn's
              <span>Terms of Service</span> and acknowledge that you have read
              and understood the <span>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </OtpLog>
      {/* {user ? <Homepage song={song} loadingFlag={loadingFlag} /> : null} */}
    </>
  );
};
