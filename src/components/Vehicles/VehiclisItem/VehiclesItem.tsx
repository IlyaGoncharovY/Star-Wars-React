import React, {FC} from 'react';
import {IVehicles} from "../../../types/IVehicles";

interface VehiclesItemType {
    vehicles: IVehicles
}

const VehiclesItem: FC<VehiclesItemType> = ({vehicles}) => {
    return (
        <div>
            {vehicles.name}
            <button>Reed More</button>
        </div>
    );
};

export default VehiclesItem;