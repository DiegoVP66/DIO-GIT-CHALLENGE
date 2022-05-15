import "./styles.css";

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4 input-container">
          <input type="text" placeholder="E-mail" name="username" />
        </div>
        <div className="mb-2 input-container">
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete=""
          />
        </div>
        <div className="login-submit mt-4">
          <button className="btn btn-primary text-white">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
