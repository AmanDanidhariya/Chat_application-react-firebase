
const Login= () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Qwick Chat</span>
      <span className="title">Register</span>
        <form>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>Sign in</button>
        </form>
        <p>you don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
