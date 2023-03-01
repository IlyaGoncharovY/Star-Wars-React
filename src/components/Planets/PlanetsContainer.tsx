import React from 'react';
import {starWarsApi} from "../../API/SWService";
import PlanetItem from "./PlanetItem/PlanetItem";


const PlanetsContainer = () => {

    const {data: planets} = starWarsApi.useFetchDataSWQuery(1)
    console.log(planets)
    return (
        <div>
            {planets && planets.results.map((planet, index) => <PlanetItem key={index} planet={planet}/>)}
        </div>
    );

}
export default PlanetsContainer;