import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";
import "./App.css";

ReactDOM.render(
<React.StrictMode>
<Router>  
<TodoContainer />
</Router> 
</React.StrictMode> ,
 document.getElementById("root"))