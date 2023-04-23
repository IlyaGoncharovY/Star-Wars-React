import React from 'react';
import StarshipsItem from "./StarshipsItem/StarshipsItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";

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
                <StarshipsItem key={index} starships={starships}/>)}
        </div>
    );
};

export default StarshipsContainer;