import React, {FC} from 'react';
import {IStarships} from "../../../types/IStarships";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {peopleAPI} from "../../../api/PeopleService";

interface StarshipsModalType {
    open: boolean
    closeHandler: () => void
    starships: IStarships
    id: string
}

export const StarshipsModal: FC<StarshipsModalType> = ({open, closeHandler,
                                                           starships, id}) => {

    // const {data: peoples} = peopleAPI.useGetPeopleQuery(1)
    const {data: peoples} = peopleAPI.useGetPilotsQuery(id)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{starships.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        <li>Model: {starships.model}</li>
                        <li>Manufacturer: {starships.manufacturer}</li>
                        <li>Cost in credits: {starships.cost_in_credits}</li>
                        <li>Length: {starships.length}</li>
                        <li>Max atmosphering speed: {starships.max_atmosphering_speed}</li>
                        <li>Crew: {starships.crew}</li>
                        <li>Passengers: {starships.passengers}</li>
                        <li>Cargo_capacity: {starships.cargo_capacity}</li>
                        <li>Consumables: {starships.consumables}</li>
                        <li>Hyperdrive rating: {starships.hyperdrive_rating}</li>
                        <li>MGLT: {starships.MGLT}</li>
                        <li>Starship class: {starships.starship_class}</li>
                        <li>Pilots: {starships.pilots.length}</li>
                        <ul>
                                {peoples && peoples.name}
                            {/*<li>{peoples && peoples.results.map(el => el.name).join(", ")}</li>*/}
                        </ul>
                        <li>Films: {starships.films.length}</li>
                        <li>Created: {starships.created}</li>
                        <li>Edited: {starships.edited}</li>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

