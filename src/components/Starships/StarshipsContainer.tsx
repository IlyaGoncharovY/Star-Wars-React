import React from 'react';
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";
import {ItemCommonForApp} from "../../common/ItemCommon/ItemCommonForApp";

const StarshipsContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 4
    let minPage = 1


    const {data: starships, error, isLoading} = swAPI.useGetStarshipsQuery(nextPage)

    return (
        <div>
            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {starships && starships.results.map((starships, index) =>
                <ItemCommonForApp key={index} starships={starships} type={"starships"}/>)}
        </div>
    );
};

export default StarshipsContainer;