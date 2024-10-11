import React from "react";
import PageRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

export default App;
