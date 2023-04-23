import React from 'react';
import {FilmItem} from "./FilmsItem/FilmItem";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import {swAPI} from "../../api/GetSWApiService";


export const FilmsContainer = () => {

    const {data: films, error, isLoading} = swAPI.useGetFilmsQuery("")

    return (
        <div>
            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            {films && films.results.map((films, index) =>
                <FilmItem key={index} films={films}/>)}
        </div>
    );
};
