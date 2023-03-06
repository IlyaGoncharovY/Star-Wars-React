import React from 'react';
import {peopleAPI} from "../../api/PeopleService";
import PeopleItem from "./PeopleItem/PeopleItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";

const PeoplesContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 9
    let minPage = 1

    const {data: peoples, error, isLoading} = peopleAPI.useGetPeopleQuery(nextPage)

    return (
        <div>
            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {peoples && peoples.results.map((people, index) =>
                <PeopleItem key={index} people={people}/>)}
        </div>
    );
};

export default PeoplesContainer;