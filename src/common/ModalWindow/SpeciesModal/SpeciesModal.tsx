import React, {FC} from 'react';
import {ISpecies} from "../../../types/ISpecies";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";

interface SpeciesModalType {
    open: boolean
    closeHandler: () => void
    species: ISpecies
}

export const SpeciesModal: FC<SpeciesModalType> = ({open, closeHandler, species}) => {
    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{species.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        <li>Classification: {species.classification}</li>
                        <li>Designation: {species.designation}</li>
                        <li>Average height: {species.average_height}</li>
                        <li>Skin colors: {species.skin_colors}</li>
                        <li>Hair colors: {species.hair_colors}</li>
                        <li>Eye colors: {species.eye_colors}</li>
                        <li>Average lifespan: {species.average_lifespan}</li>
                        <li>Homeworld: {species.homeworld}</li>
                        <li>Language: {species.language}</li>
                        <li>People:
                            <ul>
                                <li>{species.people.length}</li>
                            </ul>
                        </li>
                        <li>Films:
                            <ul>
                                <li>{species.films.length}</li>
                            </ul>
                        </li>
                        <li>Created: {species.created}</li>
                        <li>Edited: {species.edited}</li>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

