import React from 'react';
import {Modal} from 'react-bootstrap';
import {BasicModal} from "../BasicModal";
import {IPlanet} from "../../../types/IPlanet";
import {useResidentAndFilms} from "../../../Utils/hooks/useResidentAndFilms";

interface PlanetModalType {
    open: boolean
    closeHandler: () => void
    planet: IPlanet
}

const PlanetModal: React.FC<PlanetModalType> = ({open, closeHandler, planet}) => {

    const {residentNames, films} = useResidentAndFilms(planet)

    const planetsArray = Object.entries(planet)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{planet.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        {planetsArray.map(([key, value]) => {
                            if (key === "residents" || key === "films" || key === "url") return null
                            return <li>{key}: {value}</li>
                        })}
                        {residentNames.length ? <li>residents: </li> : ""}
                        <ul>
                            {residentNames.map((resident, index) =>
                                <li key={index}>{resident}</li>
                            )}
                        </ul>
                        <li>films: </li>
                        <ul>
                            {films.map((film, index) =>
                                <li key={index}>{film}</li>
                            )}
                        </ul>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};
export default PlanetModal;