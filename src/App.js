import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ProductPage from "./components/Products/ProductPage";
import LoginForm from "./components/login";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <ProductPage />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
