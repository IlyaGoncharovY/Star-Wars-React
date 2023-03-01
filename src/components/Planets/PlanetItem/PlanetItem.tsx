import React, {FC} from 'react';
import {IPlanet} from "../../../models/IPlanet";

interface PlanetItemType {
    planet: IPlanet
}

const PlanetItem: FC<PlanetItemType> = ({planet}) => {
    return (
        <div>
            {planet.name}. {planet.diameter}
            <button>Reed More</button>
        </div>
    );
};

export default PlanetItem