import React, {FC, useEffect, useState} from 'react';
import {IStarships} from "../../../types/IStarships";
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";

interface StarshipsModalType {
    open: boolean
    closeHandler: () => void
    starships: IStarships
}

export const StarshipsModal: FC<StarshipsModalType> = ({
                                                           open, closeHandler,
                                                           starships
                                                       }) => {

    const [pilotNames, setPilotNames] = useState<string[]>([]);
    const [films, setFilms] = useState<string[]>([])

    useEffect(() => {
        const fetchFilms = async () => {
            const films: string[] = [];
            for (const url of starships.films) {
                const response = await fetch(url);
                const data = await response.json();
                films.push(data.title);
            }
            setFilms(films);
        };
        fetchFilms();

        const fetchPilotNames = async () => {
            const names: string[] = [];
            for (const url of starships.pilots) {
                const response = await fetch(url);
                const data = await response.json();
                names.push(data.name);
            }
            setPilotNames(names);
        };
        fetchPilotNames();
    }, [starships.pilots, starships.films]);

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
                            {pilotNames.length ? <li>Pilots:</li> : ""}
                        <ul>
                            {pilotNames.map((pilot, index) => <li key={index}>{pilot}</li>)}
                        </ul>
                        <li>Films:</li>
                        <ul>
                            {films.map((film, index) => <li key={index}>{film}</li>)}
                        </ul>
                        <li>Created: {starships.created}</li>
                        <li>Edited: {starships.edited}</li>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

