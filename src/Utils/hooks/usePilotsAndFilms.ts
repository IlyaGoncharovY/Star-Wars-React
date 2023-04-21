import {useEffect, useState} from "react";
import {IStarships} from "../../types/IStarships";
import {IVehicles} from "../../types/IVehicles";

type DataApiType = IStarships | IVehicles

export const usePilotsAndFilms = (data: DataApiType) => {

    const [pilotNames, setPilotNames] = useState<string[]>([]);
    const [films, setFilms] = useState<string[]>([])

    const fetchFilms = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.title
    }

    const fetchPilotNames = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.name
    }


    useEffect(() => {

        const fetchStarshipData = async () => {

            const filmPromise = data.films.map(fetchFilms)
            const pilotPromise = data.pilots.map(fetchPilotNames)

            const filmTitles = await Promise.all(filmPromise)
            const pilotName = await Promise.all(pilotPromise)

            setFilms(filmTitles)
            setPilotNames(pilotName)

        }
        fetchStarshipData()
    }, [data.pilots, data.films]);

    return {
        pilotNames,
        films
    }
}