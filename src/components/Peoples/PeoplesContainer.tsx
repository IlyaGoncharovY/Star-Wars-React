import React, {useState} from 'react';
import {peopleAPI} from "../../api/PeopleService";
import PeopleItem from "./PeopleItem/PeopleItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";

const PeoplesContainer = () => {

    let [nextPage, setNextPage] = useState<number>(1)

    let maxPage = 9
    let minPage = 1

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }

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