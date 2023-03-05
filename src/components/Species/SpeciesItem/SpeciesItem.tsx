import React, {FC} from 'react';
import {ISpecies} from "../../../types/ISpecies";

interface SpeciesItemType {
    species: ISpecies
}

const SpeciesItem: FC<SpeciesItemType> = ({species}) => {
    return (
        <div>
            {species.name}
            <button>Reed More</button>
        </div>
    );
};

export default SpeciesItem;