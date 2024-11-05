import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Facts from './components/Facts';
import Symptoms from './components/Symptoms';
import FactorsRisk from './components/FactorsRisk';
import SectionInfo from './components/SectionInfo';
import Coments from './components/Coments';
import SelfExam from './components/SelfExam';
import Treatment from './components/Treatment';
import TreatmentPage from './pages/TreatmentPage'; // Importa a página de tratamento
import TreatmentHeader from './components/TreatmentHeader';

function App() {
    return (
        <div>

            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <div id="início"><Slider /></div>
                        <div id="conhecimento"><SectionInfo /></div>
                        <div id="dados"><Facts /></div>
                        <div id="sintomas"><Symptoms /></div>
                        <div id="autoexame"><SelfExam /></div>
                        <div id="depoimentos"><Coments /></div>
                        <div id="fatoresderisco"><FactorsRisk /></div>
                        <div id="fatoresderisco"><Treatment /></div>
                    </>
                } />

                <Route path="/tratamento" element={
                    <>
                        <TreatmentHeader />
                        <TreatmentPage />
                    </>
                } />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
