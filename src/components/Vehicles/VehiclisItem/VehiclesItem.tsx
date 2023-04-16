import React, {FC} from 'react';
import {IVehicles} from "../../../types/IVehicles";
import {Button} from "react-bootstrap";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";
import {VehiclesModal} from "../../../common/ModalWindow/VehiclesModal/VehiclesModal";

interface VehiclesItemType {
    vehicles: IVehicles
}

const VehiclesItem: FC<VehiclesItemType> = ({vehicles}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {vehicles.name}
            <Button onClick={openModalHandler}>Reed More</Button>
            <VehiclesModal
                open={openModal}
                closeHandler={closeModalHandler}
                vehicles={vehicles}
            />
        </div>
    );
};

export default VehiclesItem;