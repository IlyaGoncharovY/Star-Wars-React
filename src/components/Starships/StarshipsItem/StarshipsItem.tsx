import React, {FC} from 'react';
import {IStarships} from "../../../types/IStarships";
import {Button} from "react-bootstrap";
import {StarshipsModal} from "../../../common/ModalWindow/StarshipsModal/StarshipsModal";
import {useOpenModal} from "../../../common/hookForOpenModal/useOpenModal";

interface StarshipsItemType {
    starships: IStarships
}

const StarshipsItem: FC<StarshipsItemType> = ({starships}) => {

    const {openModal, openModalHandler, closeModalHandler} = useOpenModal()


    return (
        <div>
            {starships.name}
            <Button onClick={openModalHandler}>Reed More</Button>
            <StarshipsModal
                open={openModal}
                closeHandler={closeModalHandler}
                starships={starships}
                id={"13"}
            />
        </div>
    );
};

export default StarshipsItem;