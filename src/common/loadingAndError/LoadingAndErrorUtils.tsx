import React, {FC} from 'react';
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface LoadingAndErrorUtilsType {
    error:  FetchBaseQueryError | SerializedError | undefined,
    isLoading: boolean
}

const LoadingAndErrorUtils: FC<LoadingAndErrorUtilsType>  = ({isLoading, error}) => {
    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>Error =( </h1>}
        </div>
    );
};

export default LoadingAndErrorUtils;