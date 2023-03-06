import React from 'react';
import {planetAPI} from "../../api/PlanetService";
import PlanetItem from "./PlanetItem/PlanetItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";


const PlanetsContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 7
    let minPage = 1

    const {data: planets, error, isLoading} = planetAPI.useGetPlanetQuery(nextPage)

    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {planets && planets.results.map((planet, index) => <PlanetItem key={index} planet={planet}/>)}

        </div>
    );

}
export default PlanetsContainer;