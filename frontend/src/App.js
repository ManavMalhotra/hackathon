import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/App_bar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Study_mainPage from "./Components/Study_components/Study_mainPage";
import Fun_mainPage from "./Components/Fun_components/Fun_mainPage";
import Text_input from "./Components/Study_components/Text_input";
import Image_input from "./Components/Study_components/Image_input";

function App() {
  return (
    <div className="App">
      {/* <Header />
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <Home /> */}
      {/* <Text_input />
      <Footer />  */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            <>
              <Header />
              <Registration />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Blog />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/study"
          element={
            <>
              <Header />
              <Study_mainPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/study/text_input"
          element={
            <>
              <Header />
              <Text_input />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/study/image_input"
          element={
            <>
              <Header />
              <Image_input />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/fun"
          element={
            <>
              <Header />
              <Fun_mainPage />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
