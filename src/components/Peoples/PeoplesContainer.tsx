import React from 'react';
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";
import {ItemCommonForApp} from "../../common/ItemCommon/ItemCommonForApp";

const PeoplesContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 9
    let minPage = 1

    const {data: peoples, error, isLoading} = swAPI.useGetPeoplesQuery(nextPage)

    return (
        <div>
            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {peoples && peoples.results.map((people, index) =>
                <ItemCommonForApp key={index} people={people} type={"people"}/>)}
        </div>
    );
};

export default PeoplesContainer;