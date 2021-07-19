import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/style.css";
import { Provider } from 'react-redux';
import store from "./store";
// import Register from "./components/Register";


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));