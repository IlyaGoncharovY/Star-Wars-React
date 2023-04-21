import React, {FC} from 'react';
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {IFilms} from "../../../types/IFilms";
import {useDataForPlanets} from "../../../Utils/hooks/useDataForPlanets";

interface FilmModalType {
    open: boolean
    closeHandler: () => void
    films: IFilms
}

export const FilmModal: FC<FilmModalType> = ({open, closeHandler, films}) => {

    const {vehicles, planets, species, starships, charters} = useDataForPlanets(films)

    const filmsArray = Object.entries(films)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{films.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        {filmsArray.map(([key, value]) => {
                            if (key === "characters" ||
                                key === "planets" ||
                                key === "starships" ||
                                key === "species" ||
                                key === "vehicles" ||
                                key === "url") return null;
                            return <li key={key}>{key} : {value}</li>
                        })}
                        <li>charters:</li>
                        <ul>
                            {charters.map((charter, index) => <li key={index}>{charter}</li>)}
                        </ul>
                        <li>planet:</li>
                        <ul>
                            {planets.map((planet, index) => <li key={index}>{planet}</li>)}
                        </ul>
                        <li>starships:</li>
                        <ul>
                            {starships.map((starship, index) => <li key={index}>{starship}</li>)}
                        </ul>
                        <li>species:</li>
                        <ul>
                            {species.map((specie, index) => <li key={index}>{specie}</li>)}
                        </ul>
                        {vehicles.length ? <li>vehicles: </li> : ""}
                        <ul>
                            {vehicles.map((vehicle, index) => <li key={index}>{vehicle}</li>)}
                        </ul>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

