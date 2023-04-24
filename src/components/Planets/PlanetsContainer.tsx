import React from 'react';
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";
import {ItemCommonForApp} from "../../common/ItemCommon/ItemCommonForApp";


const PlanetsContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 7
    let minPage = 1

    const {data: planets, error, isLoading} = swAPI.useGetPlanetsQuery(nextPage)

    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {planets && planets.results.map((planet, index) => <ItemCommonForApp key={index} planet={planet} type={"planet"}/>)}

        </div>
    );

}
export default PlanetsContainer;