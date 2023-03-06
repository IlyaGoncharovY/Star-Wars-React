import React, {useState} from 'react';
import {planetAPI} from "../../api/PlanetService";
import PlanetItem from "./PlanetItem/PlanetItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";


const PlanetsContainer = () => {

    let [nextPage, setNextPage] = useState<number>(1)

    let maxPage = 7
    let minPage = 1

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }

    const {data: planets, error, isLoading} = planetAPI.useGetPlanetQuery(nextPage)

    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</button>
            <button onClick={clickNextPage} disabled={nextPage >= maxPage}>NEXT</button>

            {planets && planets.results.map((planet, index) => <PlanetItem key={index} planet={planet}/>)}

        </div>
    );

}
export default PlanetsContainer;