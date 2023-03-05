import React from 'react';
import {FilmItem} from "./FilmsItem/FilmItem";
import {filmsAPI} from "../../api/FilmsService";


export const FilmsContainer = () => {

    const {data: films, error, isLoading} = filmsAPI.useGetFilmsQuery("")

    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>Error =( </h1>}

            {films && films.results.map((films, index) =>
                <FilmItem key={index} films={films}/>)}
        </div>
    );
};
