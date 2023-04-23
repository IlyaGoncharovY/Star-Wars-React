import {useEffect, useState} from "react";
import {IPlanet} from "../../types/IPlanet";

type DataApiType = IPlanet

export const useResidentAndFilms = (data: DataApiType) => {
// starships | vehicles
    const [residentNames, setResidentNames] = useState<string[]>([]);
    const [films, setFilms] = useState<string[]>([])

    const fetchFilms = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.title
    }

    const fetchResidentsNames = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.name
    }


    useEffect(() => {

        const fetchStarshipData = async () => {

            const filmPromise = data.films.map(fetchFilms)
            const residentPromise = data.residents.map(fetchResidentsNames)

            const filmTitles = await Promise.all(filmPromise)
            const residentName = await Promise.all(residentPromise)

            setFilms(filmTitles)
            setResidentNames(residentName)

        }
        fetchStarshipData()
    }, [data.residents, data.films]);

    return {
        residentNames,
        films
    }
}