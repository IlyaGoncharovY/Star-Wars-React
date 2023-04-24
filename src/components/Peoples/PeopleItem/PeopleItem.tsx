import React, {FC} from 'react';
import {IPeople} from "../../../types/IPeople";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";
import {Button} from "react-bootstrap";
import {PeopleModal} from "../../../common/ModalWindow/PeopleModal/PeopleModal";

interface PeopleItemType {
    people: IPeople
}

const PeopleItem: FC <PeopleItemType> = ({people}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()

    return (
        <div>
            {people.name}
            <Button onClick={openModalHandler}>Reed More</Button>
            <PeopleModal
                open={openModal}
                closeHandler={closeModalHandler}
                people={people}/>
        </div>
    );
};

export default PeopleItem;