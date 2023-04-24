import React, {FC} from 'react';
import {BasicModal} from "../BasicModal";
import {Modal} from "react-bootstrap";
import {IPeople} from "../../../types/IPeople";
import {useDataForPeoples} from "../../../Utils/hooks/useDataForPeoples";
import {swAPI} from "../../../api/GetSWApiService";

interface PeopleModalType {
    open: boolean
    closeHandler: () => void
    people: IPeople
}

export const PeopleModal: FC<PeopleModalType> = ({open, closeHandler, people}) => {

    const {films, species, vehicles, starships} = useDataForPeoples(people)

    const {data: homeworld} = swAPI.useGetHomeworldQuery(people?.homeworld)

    const peopleArray = Object.entries(people)

    return (
        <BasicModal open={open} closeHandler={closeHandler}>
            <Modal.Header>
                <Modal.Title>{people.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <ul>
                        {peopleArray.map(([key, value]) => {
                            if (key === "films"
                                || key === "species"
                                || key === "vehicles"
                                || key === "starships"
                                || key === "url"
                                || key === "homeworld"
                            ) return null
                            return <li key={key}>{key}: {value}</li>
                        })}
                        <li>homeworld: {homeworld?.name}</li>
                        <li>films:</li>
                        <ul>
                            {films.map((film, index) => <li key={index}>{film}</li>)}
                        </ul>
                        <li>species:</li>
                        <ul>
                            {species.map((specie, index) => <li key={index}>{specie}</li>)}
                        </ul>
                        <li>vehicles:</li>
                        <ul>
                            {vehicles.map((vehicle, index) => <li key={index}>{vehicle}</li>)}
                        </ul>
                        <li>starships:</li>
                        <ul>
                            {starships.map((starship, index) => <li key={index}>{starship}</li>)}
                        </ul>
                    </ul>
                </div>
            </Modal.Body>
        </BasicModal>
    );
};

