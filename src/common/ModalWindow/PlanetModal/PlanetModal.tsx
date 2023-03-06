import React from 'react';
import {Modal} from 'react-bootstrap';
import {BasicModal} from "../BasicModal";
import {IPlanet} from "../../../types/IPlanet";

interface PlanetModalType {
    open: boolean
    closeHandler: () => void
    planet: IPlanet
}

const PlanetModal: React.FC<PlanetModalType> = ({open, closeHandler, planet}) => {
    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{planet.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        <li>Diameter: {planet.diameter}</li>
                        <li> Rotation period: {planet.rotation_period}</li>
                        <li>Orbital period: {planet.orbital_period}</li>
                        <li>Gravity: {planet.gravity}</li>
                        <li> Population: {planet.population}</li>
                        <li>Climate: {planet.climate}</li>
                        <li>Terrain: {planet.terrain}</li>
                        <li>Surface water: {planet.surface_water}</li>
                        <li>Residents: {planet.residents}</li>
                        <li>Films: {planet.films}</li>
                        <li>Created: {planet.created}</li>
                        <li>Edited: {planet.edited}</li>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
}
    ;

    export default PlanetModal;