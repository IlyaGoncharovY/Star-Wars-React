import React, {FC} from 'react';
import {IStarships} from "../../../types/IStarships";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {usePilotsAndFilms} from "../../../Utils/hooks/usePilotsAndFilms";

interface StarshipsModalType {
    open: boolean
    closeHandler: () => void
    starships: IStarships | undefined
}

export const StarshipsModal: FC<StarshipsModalType> = ({
                                                           open, closeHandler,
                                                           starships
                                                       }) => {

    const {pilotNames, films} = usePilotsAndFilms(starships!)

    const starshipsArray = Object.entries(starships!)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{starships!.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        {starshipsArray.map(([key, value]) => {
                            if (key === "films" || key === "pilots" || key === "url") return null;
                            return <li key={key}>{key} : {value}</li>
                        })}

                            {pilotNames.length ? <li>pilots:</li> : ""}
                        <ul>
                            {pilotNames.map((pilot, index) => <li key={index}>{pilot}</li>)}
                        </ul>
                        <li>films: </li>
                        <ul>
                            {films.map((film, index) => <li key={index}>{film}</li>)}
                        </ul>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

