import React from 'react';
import VehiclesItem from "./VehiclisItem/VehiclesItem";
import {vehiclesAPI} from "../../api/VehiclesService";
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";

const VehiclesContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 4
    let minPage = 1

    const {data: vehicles, error, isLoading} = vehiclesAPI.useGetVehiclesQuery(nextPage)


    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>


            {vehicles && vehicles.results.map((vehicles, index) => <VehiclesItem key={index} vehicles={vehicles}/>)}

        </div>
    );

}
export default VehiclesContainer;