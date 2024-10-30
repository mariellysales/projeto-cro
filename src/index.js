import React from "react";
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
import SelfExam from "./components/SelfExam";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div id="início"><Slider /></div>
    <div id="conhecimento"><SectionInfo /></div>
    <div id="autoexame"><SelfExam /></div>
    <div id="dados"><Facts /></div>
    <div id="sintomas"><Symptoms /></div>
    <div id="factorsRisk"><FactorsRisk /></div>
    <div id="selfExam"><SelfExam /></div>
    <div id="depoimentos"><Coments /></div>
    <div id="Contact"><Contact /></div>
    <div id="footer"><Footer /></div>
  </React.StrictMode>
);

reportWebVitals();