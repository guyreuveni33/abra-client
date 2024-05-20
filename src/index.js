import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PetsScreen from './PetsScreen';
import AllPetsView from './AllPetsView';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PetsScreen/>} />
                <Route path="/AllPetsView" element={<AllPetsView />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
