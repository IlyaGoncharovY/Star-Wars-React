import React, {useState} from 'react';
import {peopleAPI} from "../../api/PeopleService";
import PeopleItem from "./PeopleItem/PeopleItem";

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
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>Error =( </h1>}

            <button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</button>
            <button onClick={clickNextPage} disabled={nextPage === maxPage}>NEXT</button>

            {peoples && peoples.results.map((people, index) =>
                <PeopleItem key={index} people={people}/>)}
        </div>
    );
};

export default PeoplesContainer;