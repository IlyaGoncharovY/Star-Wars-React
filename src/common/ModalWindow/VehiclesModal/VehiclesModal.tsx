import React, {FC} from 'react';
import {IVehicles} from "../../../types/IVehicles";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {usePilotsAndFilms} from "../../../Utils/hooks/usePilotsAndFilms";

interface VehiclesModalType {
    open: boolean
    closeHandler: () => void
    vehicles: IVehicles | undefined
}

export const VehiclesModal: FC<VehiclesModalType> = ({open, closeHandler, vehicles}) => {

    const {pilotNames, films} = usePilotsAndFilms(vehicles!)

    const vehiclesArray = Object.entries(vehicles!)

    return (
            <BasicModal open={open} closeHandler={closeHandler}>
                <Modal.Header>
                    <Modal.Title>{vehicles!.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <ul>
                            {vehiclesArray.map(([key, value]) => {
                                if (key === "films" || key === "pilots" || key === "url") return null;
                                return  <li key={key}>{key} : {value}</li>
                            })}

                            {pilotNames.length ? <li>pilots:</li> : ""}
                            <ul>
                                {pilotNames.map((pilot, index) => <li key={index}>{pilot}</li>)}
                            </ul>
                            <li>films:</li>
                            <ul>
                                {films.map((film, index) => <li key={index}>{film}</li>)}
                            </ul>
                        </ul>
                    </div>
                </Modal.Body>
            </BasicModal>
    );
};

