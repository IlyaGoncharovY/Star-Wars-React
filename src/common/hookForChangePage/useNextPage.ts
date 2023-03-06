import {useState} from "react";

export const useNextPage = (page: number) => {
    let [nextPage, setNextPage] = useState<number>(page)

    const clickNextPage = () => {
        setNextPage(nextPage += 1)
    }

    const clickPrevPage = () => {
        setNextPage(nextPage -= 1)
    }
    return (
        {nextPage, clickNextPage, clickPrevPage}
    )
}






