import React, {useState} from 'react';
import {starshipsAPI} from "../../api/StarshipsService";
import StarshipsItem from "./StarshipsItem/StarshipsItem";

const StarshipsContainer = () => {
    let [nextPage, setNextPage] = useState<number>(1)

    let maxPage = 4
    let minPage = 1

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }

    const {data: starships, error, isLoading} = starshipsAPI.useGetStarshipsQuery(nextPage)

    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>Error =( </h1>}

            <button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</button>
            <button onClick={clickNextPage} disabled={nextPage === maxPage}>NEXT</button>

            {starships && starships.results.map((starships, index) =>
                <StarshipsItem key={index} starships={starships}/>)}
        </div>
    );
};

export default StarshipsContainer;