import React, {FC} from 'react';
import {IPlanet} from "../../../types/IPlanet";
import PlanetModal from "../../../common/ModalWindow/PlanetModal/PlanetModal";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";
import {Button} from "react-bootstrap";

interface PlanetItemType {
    planet: IPlanet
}

const PlanetItem: FC<PlanetItemType> = ({planet}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {planet.name}
            <Button onClick={openModalHandler}>Reed More</Button>
            <PlanetModal
                open={openModal}
                closeHandler={closeModalHandler}
                planet={planet}
            />
        </div>
    );
};

export default PlanetItem