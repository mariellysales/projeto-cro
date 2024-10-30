import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import Slider from "./components/Slider";
import Facts from "./components/Facts";
import Symptoms from "./components/Symptoms";
import Footer from "./components/Footer";
import FactorsRisk from "./components/FactorsRisk";
import SectionInfo from "./components/SectionInfo";
import Coments from "./components/Coments";
import Contact from "./components/Contact";
import SelfExam from "./pages/pageSelfExam";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                  <div id="início"><Slider /></div>
                  <div id="conhecimento"><SectionInfo /></div>
                  <div id="dados"><Facts /></div>
                  <div id="sintomas"><Symptoms /></div>
                  <div id="factorsRisk"><FactorsRisk /></div>
                  <div id="depoimentos"><Coments /></div>
                  <div id="Contact"><Contact /></div>
                  <div id="footer"><Footer /></div>
              </>
            }
          />

          <Route path="/self-exam" element={<SelfExam />} />
        </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
