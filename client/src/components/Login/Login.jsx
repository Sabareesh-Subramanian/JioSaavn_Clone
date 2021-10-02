import { Login } from "../../stylemodules/LoginStyles";
import signup from "../../images/signup.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState(false);
  const history = useHistory();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleLogin = async () => {
    let { data } = await axios.get("http://localhost:3001/users");
    for (var i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].pass === pass) {
        setEmail("");
        setPass("");
        setAuth(true);
        break;
      }
    }
    if (auth) {
      history.push("/");
    } else {
      alert("wrong Credentials");
    }
  };
  return (
    <Login>
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
          <p>Login with your email address.</p>
        </div>
        <div>
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
          <button onClick={handleLogin}>Continue</button>
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
    </Login>
  );
};
