import React from 'react';
import {FilmItem} from "./FilmsItem/FilmItem";
import {filmsAPI} from "../../api/FilmsService";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";


export const FilmsContainer = () => {

    const {data: films, error, isLoading} = filmsAPI.useGetFilmsQuery("")

    return (
        <div>
            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            {films && films.results.map((films, index) =>
                <FilmItem key={index} films={films}/>)}
        </div>
    );
};
