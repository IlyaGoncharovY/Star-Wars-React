import {useEffect, useState} from "react";
import {ISpecies} from "../../types/ISpecies";

type DataApiType = ISpecies

export const usePeopleAndFilms = (data: DataApiType) => {
// starships | vehicles
    const [peopleNames, setPeopleNames] = useState<string[]>([]);
    const [films, setFilms] = useState<string[]>([])

    const fetchFilms = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.title
    }

    const fetchPeopleNames = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.name
    }


    useEffect(() => {

        const fetchStarshipData = async () => {

            const filmPromise = data.films.map(fetchFilms)
            const peoplePromise = data.people.map(fetchPeopleNames)

            const filmTitles = await Promise.all(filmPromise)
            const peopleName = await Promise.all(peoplePromise)

            setFilms(filmTitles)
            setPeopleNames(peopleName)

        }
        fetchStarshipData()
    }, [data.people, data.films]);

    return {
        peopleNames,
        films
    }
}