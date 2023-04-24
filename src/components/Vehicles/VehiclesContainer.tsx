import React from 'react';
import LoadingAndErrorUtils from "../../common/loadingAndError/LoadingAndErrorUtils";
import ButtonsSwitching from "../../common/ButtonsSwitching/ButtonsSwitching";
import {useNextPage} from "../../common/hookForChangePage/useNextPage";
import {swAPI} from "../../api/GetSWApiService";
import {ItemCommonForApp} from "../../common/ItemCommon/ItemCommonForApp";

const VehiclesContainer = () => {

    let {nextPage, clickNextPage, clickPrevPage} = useNextPage(1)

    let maxPage = 4
    let minPage = 1

    const {data: vehicles, error, isLoading} = swAPI.useGetVehiclesQuery(nextPage)


    return (
        <div>

            <LoadingAndErrorUtils error={error} isLoading={isLoading}/>

            <ButtonsSwitching clickPrevPage={clickPrevPage}
                              clickNextPage={clickNextPage}
                              nextPage={nextPage}
                              minPage={minPage}
                              maxPage={maxPage}/>


            {vehicles && vehicles.results.map((vehicles, index) => <ItemCommonForApp key={index} vehicles={vehicles} type={"vehicles"}/>)}

        </div>
    );

}
export default VehiclesContainer;