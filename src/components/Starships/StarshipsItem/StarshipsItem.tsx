import React, {FC} from 'react';
import {IStarships} from "../../../types/IStarships";

interface StarshipsItemType {
    starships: IStarships
}

const StarshipsItem: FC<StarshipsItemType> = ({starships}) => {
    return (
        <div>
            {starships.name}
            <button>Reed More</button>
        </div>
    );
};

export default StarshipsItem;