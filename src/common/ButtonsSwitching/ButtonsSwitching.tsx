import React, {FC} from 'react';

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
            <button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</button>
            <button onClick={clickNextPage} disabled={nextPage >= maxPage}>NEXT</button>
        </>
    );
};

export default ButtonsSwitching;