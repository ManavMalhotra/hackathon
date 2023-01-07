import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/App_bar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Registration /> */}
      <Home />
      <Footer />

      {/* <Router>
        <Route exact path="/">
          <Header />
          <Footer />
        </Route>
      </Router> */}
    </div>
  );
}

export default App;
