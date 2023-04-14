import React, {FC} from 'react';
import {ISpecies} from "../../../types/ISpecies";
import {SpeciesModal} from "../../../common/ModalWindow/SpeciesModal";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";

interface SpeciesItemType {
    species: ISpecies
}

const SpeciesItem: FC<SpeciesItemType> = ({species}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {species.name}
            <button onClick={openModalHandler}>Reed More</button>
            <SpeciesModal open={openModal}
                          closeHandler={closeModalHandler}
                          species={species}
            />
        </div>
    );
};

export default SpeciesItem;