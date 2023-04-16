import React, {FC} from 'react';
import {ISpecies} from "../../../types/ISpecies";
import {SpeciesModal} from "../../../common/ModalWindow/SpeciesModal/SpeciesModal";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";
import {Button} from "react-bootstrap";

interface SpeciesItemType {
    species: ISpecies
}

const SpeciesItem: FC<SpeciesItemType> = ({species}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {species.name}
            <Button onClick={openModalHandler}>Reed More</Button>
            <SpeciesModal open={openModal}
                          closeHandler={closeModalHandler}
                          species={species}
            />
        </div>
    );
};

export default SpeciesItem;