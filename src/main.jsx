import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import SideImg from "./components/SideImg.jsx";
import SideBar from "./components/SideBar.jsx";
import About from "./components/About.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container-fluid row">       
          <div className="col-auto bg-light vh-100 d-flex p-0">
              <SideImg />
              <SideBar />
          </div>
          <div className="col p-4 mr-0">
            <Routes>
              <Route path="/sidebar" element={<About />} />
            </Routes>
          </div>
        </div>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
