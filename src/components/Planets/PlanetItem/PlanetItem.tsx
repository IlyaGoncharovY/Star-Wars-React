import React, {FC, useState} from 'react';
import {IPlanet} from "../../../types/IPlanet";
import PlanetModal from "../../../common/ModalWindow/PlanetModal/PlanetModal";

interface PlanetItemType {
    planet: IPlanet
}

const PlanetItem: FC<PlanetItemType> = ({planet}) => {

    let [openModal, setOpenModal] = useState<boolean>(false)

    const openModalHandler = () => setOpenModal(true)
    const closeModalHandler = () => setOpenModal(false)

    return (
        <div>
            {planet.name}
            <button onClick={openModalHandler}>Reed More</button>
            <PlanetModal
                open={openModal}
                closeHandler={closeModalHandler}
                planet={planet}
            />
        </div>
    );
};

export default PlanetItem