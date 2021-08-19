import React, { Component, useContext } from "react";
import Header from "./component/Header";
import Login from "./component/Login";
import { Provider, AuthContext } from "./Context";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? "welcome" : <Login />}
    </div>
  );
}

function AppwithStore() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

export default AppwithStore;
