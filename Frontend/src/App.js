import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reg from "../src/components/registration";
import Course from "./components/Student/Course";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
           <Reg/>
          </Route>
          <Route exact path="/course">
           <Course/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
