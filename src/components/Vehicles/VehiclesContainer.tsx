import React, {useState} from 'react';
import VehiclesItem from "./VehiclisItem/VehiclesItem";
import {vehiclesAPI} from "../../api/VehiclesService";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";

const VehiclesContainer = () => {
    let [nextPage, setNextPage] = useState<number>(1)

    let maxPage = 4
    let minPage = 1

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }

    const {data: vehicles, error, isLoading} = vehiclesAPI.useGetVehiclesQuery(nextPage)


    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <button onClick={clickPrevPage} disabled={nextPage === minPage}>PREV</button>
            <button onClick={clickNextPage} disabled={nextPage >= maxPage}>NEXT</button>

            {vehicles && vehicles.results.map((vehicles, index) => <VehiclesItem key={index} vehicles={vehicles}/>)}

        </div>
    );

}
export default VehiclesContainer;