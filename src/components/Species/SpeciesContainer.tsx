import React from 'react';
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";
import {ItemCommonForApp} from "../../common/ItemCommon/ItemCommonForApp";

const SpeciesContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 4
    let minPage = 1

    const {data: species, error, isLoading} = swAPI.useGetSpeciesQuery(nextPage)

    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {species && species.results.map((species, index) => <ItemCommonForApp key={index} species={species} type={"species"}/>)}

        </div>
    );

}
export default SpeciesContainer;