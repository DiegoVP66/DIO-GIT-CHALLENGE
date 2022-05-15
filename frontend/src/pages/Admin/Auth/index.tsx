import Login from "./Login";
import AdmImg from "assets/img/adm.svg";

import "./styles.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-img-container">
        <img src={AdmImg} alt="" />
      </div>
      <div className="auth-login-container">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
