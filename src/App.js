import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Head from "./components/head";
import Main from "./components/main";
import Footer from "./components/footer";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
