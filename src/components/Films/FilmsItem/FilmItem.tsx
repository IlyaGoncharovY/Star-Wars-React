import React, {FC} from 'react';
import {IFilms} from "../../../types/IFilms";

interface FilmItemType {
    films: IFilms
}

export const FilmItem: FC<FilmItemType> = ({films}) => {
    return (
        <div>
            {films.title}
            <button>Reed More</button>
        </div>
    );
};

