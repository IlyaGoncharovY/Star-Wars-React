import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import PlanetsContainer from "./components/Planets/PlanetsContainer";
import {PATH} from "./Utils/path/Path";
import {FilmsContainer} from "./components/Films/FilmsContainer";
import StarshipsContainer from "./components/Starships/StarshipsContainer";
import VehiclesContainer from "./components/Vehicles/VehiclesContainer";
import SpeciesContainer from "./components/Species/SpeciesContainer";
import PeoplesContainer from "./components/Peoples/PeoplesContainer";
import NavigationBar from "./features/NavigationBar/NavigationBar";
import HomePage from "./components/Home/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <NavigationBar/>
            <Routes>
                <Route path={PATH.MAIN} element={<HomePage/>} />
                <Route path={PATH.PEOPLES} element={<PeoplesContainer/>} />
                <Route path={PATH.FILMS} element={<FilmsContainer/>} />
                <Route path={PATH.STARSHIPS} element={<StarshipsContainer/>} />
                <Route path={PATH.VEHICLES} element={<VehiclesContainer/>} />
                <Route path={PATH.SPECIES} element={<SpeciesContainer/>} />
                <Route path={PATH.PLANETS} element={<PlanetsContainer/>} />
            </Routes>
        </div>
    );
}

export default App;
