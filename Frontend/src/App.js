import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reg from "../src/components/registration";
import Course from "./components/Student/Course";
import AdminPage from "./components/adminpg";
import RegMentor from "./components/regmentor";
import Admin from "./components/Admin";
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
          <Route exact path="/regmen">
           <RegMentor/>
          </Route>
          <Route exact path="/adminlogin">
           <AdminPage/>
          </Route>
          <Route exact path="/admin">
           <Admin/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
