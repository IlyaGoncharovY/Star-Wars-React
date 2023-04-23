import React, {FC} from 'react';
import {ISpecies} from "../../../types/ISpecies";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {usePeopleAndFilms} from "../../../Utils/hooks/usePeopleAndFilms";

interface SpeciesModalType {
    open: boolean
    closeHandler: () => void
    species: ISpecies
}

export const SpeciesModal: FC<SpeciesModalType> = ({open, closeHandler, species}) => {

    const {peopleNames, films} = usePeopleAndFilms(species)

    const speciesArray = Object.entries(species)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{species.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        {speciesArray.map(([key, value]) => {
                            if (key === "people" || key === "films" || key === "url") return null;
                            return <li key={key}>{key} : {value}</li>
                        })}
                        <li>people:
                            <ul>
                                {peopleNames.map((people, index) =>
                                    <li key={index}>{people}</li>
                                )}
                            </ul>
                        </li>
                        <li>films:
                            <ul>
                                {films.map((film, index) =>
                                    <li key={index}>{films}</li>
                                )}
                                <li>{species.films.length}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

