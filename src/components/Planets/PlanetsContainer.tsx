import React from 'react';
import PlanetItem from "./PlanetItem/PlanetItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";


const PlanetsContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 7
    let minPage = 1

    const {data: planets, error, isLoading} = swAPI.useGetPlanetQuery(nextPage)

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