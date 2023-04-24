import React, {FC} from 'react';
import {useOpenModal} from "../hookForOpenModal/useOpenModal";
import {Button} from "react-bootstrap";
import {StarshipsModal} from "../ModalWindow/StarshipsModal/StarshipsModal";
import {IPeople} from "../../types/IPeople";
import {IPlanet} from "../../types/IPlanet";
import {ISpecies} from "../../types/ISpecies";
import {IVehicles} from "../../types/IVehicles";
import {IStarships} from "../../types/IStarships";
import {PeopleModal} from "../ModalWindow/PeopleModal/PeopleModal";
import PlanetModal from "../ModalWindow/PlanetModal/PlanetModal";
import {SpeciesModal} from "../ModalWindow/SpeciesModal/SpeciesModal";
import {VehiclesModal} from "../ModalWindow/VehiclesModal/VehiclesModal";

type BaseType = {
    people?: IPeople
    planet?: IPlanet
    species?: ISpecies
    vehicles?: IVehicles
    starships?: IStarships
}

interface ItemCommonForAppType extends BaseType {
    type: 'people' | 'planet' | 'species' | 'vehicles' | 'starships';
}

export const ItemCommonForApp: FC<ItemCommonForAppType> = ({
                                                               type, people,
                                                               planet, species,
                                                               vehicles, starships
                                                           }) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    let name, modal;
    switch (type) {
        case "people":
            name = people?.name
            modal = <PeopleModal
                open={openModal}
                closeHandler={closeModalHandler}
                people={people}/>
            break
        case "planet":
            name = planet?.name
            modal = <PlanetModal
                open={openModal}
                closeHandler={closeModalHandler}
                planet={planet}
            />
            break
        case "species":
            name = species?.name
            modal = <SpeciesModal
                open={openModal}
                closeHandler={closeModalHandler}
                species={species}
            />
            break
        case "vehicles":
            name = vehicles?.name
            modal = <VehiclesModal
                open={openModal}
                closeHandler={closeModalHandler}
                vehicles={vehicles}
            />
            break
        case "starships":
            name = starships?.name
            modal = <StarshipsModal
                open={openModal}
                closeHandler={closeModalHandler}
                starships={starships}
            />
            break
        default:
            throw new Error(`Invalid type: ${type}`);
    }

    return (
        <div>
            {name}
            <Button onClick={openModalHandler}>Reed More</Button>
            {modal}
        </div>
    );
};

