import React, {FC} from 'react';
import {Button} from "react-bootstrap";

interface ButtonsSwitchingType {
    clickPrevPage: () => void
    clickNextPage: () => void
    nextPage: number
    minPage: number
    maxPage: number
}

const ButtonsSwitching: FC<ButtonsSwitchingType> = ({clickPrevPage, clickNextPage, nextPage, minPage, maxPage}) => {
    return (
        <>
            <Button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</Button>
            <Button onClick={clickNextPage} disabled={nextPage >= maxPage}>NEXT</Button>
        </>
    );
};

export default ButtonsSwitching;