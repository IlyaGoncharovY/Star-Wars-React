import React, {FC} from 'react';
import {IFilms} from "../../../types/IFilms";
import {Button} from "react-bootstrap";
import {FilmModal} from "../../../common/ModalWindow/FilmModal/FilmModal";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";

interface FilmItemType {
    films: IFilms
}

export const FilmItem: FC<FilmItemType> = ({films}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {films.title}
            <Button onClick={openModalHandler}>Reed More</Button>
            <FilmModal
                open={openModal}
                closeHandler={closeModalHandler}
                films={films}/>
        </div>
    );
};

