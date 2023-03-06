import React, {useState} from 'react';
import SpeciesItem from "./SpeciesItem/SpeciesItem";
import {speciesAPI} from "../../api/SpeciesService";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";

const SpeciesContainer = () => {

    let [nextPage, setNextPage] = useState<number>(1)

    let maxPage = 4
    let minPage = 1

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }

    const {data: species, error, isLoading} = speciesAPI.useGetSpeciesQuery(nextPage)

    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>

            {species && species.results.map((species, index) => <SpeciesItem key={index} species={species}/>)}

        </div>
    );

}
export default SpeciesContainer;