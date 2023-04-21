import React, {FC} from 'react';
import {IVehicles} from "../../../types/IVehicles";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {usePilotsAndFilms} from "../../../Utils/hooks/usePilotsAndFilms";

interface VehiclesModalType {
    open: boolean
    closeHandler: () => void
    vehicles: IVehicles
}

export const VehiclesModal: FC<VehiclesModalType> = ({open, closeHandler, vehicles}) => {

    const {pilotNames, films} = usePilotsAndFilms(vehicles)

    return (
            <BasicModal open={open} closeHandler={closeHandler}>
                <Modal.Header>
                    <Modal.Title>{vehicles.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul>
                            <li>Model: {vehicles.model}</li>
                            <li>Manufacturer: {vehicles.manufacturer}</li>
                            <li>Cost in credits: {vehicles.cost_in_credits}</li>
                            <li>Crew: {vehicles.crew}</li>
                            <li>Passengers: {vehicles.passengers}</li>
                            <li>Cargo capacity: {vehicles.cargo_capacity}</li>
                            <li>Consumables: {vehicles.consumables}</li>
                            <li>Vehicle class: {vehicles.vehicle_class}</li>
                            {pilotNames.length ? <li>Pilots:</li> : ""}
                            <ul>
                                {pilotNames.map((pilot, index) => <li key={index}>{pilot}</li>)}
                            </ul>
                            <li>Films:</li>
                            <ul>
                                {films.map((film, index) => <li key={index}>{film}</li>)}
                            </ul>
                            <li>Created: {vehicles.created}</li>
                            <li>Edited: {vehicles.edited}</li>
                        </ul>
                    </div>
                </Modal.Body>
            </BasicModal>
    );
};

