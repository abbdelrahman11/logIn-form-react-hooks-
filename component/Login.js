import React, { useState, useContext } from "react";
import { AuthContext } from "../Context";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const authContext = useContext(AuthContext);
  const valed = false;
  function login(e) {
    console.log({ email, password });
    e.preventDefault();
    if (password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("password is false ");
    }
  }

  return (
    <form>
      <h2>Login</h2>
      <input
        type="email"
        className="form-control"
        value={email}
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="form-control"
        value={password}
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button className="btn btn-primary mt-3 " onClick={login}>
        Login
      </button>
    </form>
  );
}
