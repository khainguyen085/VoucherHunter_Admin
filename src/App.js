import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import ProductPage from "./components/Products/ProductPage";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <h1>This is Navbar</h1>
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
