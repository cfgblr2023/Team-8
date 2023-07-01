import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const pos_func = () => {
    // Make a request for a user with a given ID
    axios.post('http://127.0.0.1:5000/test', {
      data: 'test6',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
