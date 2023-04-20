import {useEffect, useState} from "react";
import {IStarships} from "../../types/IStarships";

export const useStarships = (starships: IStarships) => {
    const [pilotNames, setPilotNames] = useState<string[]>([]);
    const [films, setFilms] = useState<string[]>([])

    useEffect(() => {
        const fetchFilms = async () => {
            const films: string[] = [];
            for (const url of starships.films) {
                const response = await fetch(url);
                const data = await response.json();
                films.push(data.title);
            }
            setFilms(films);
        };
        fetchFilms();

        const fetchPilotNames = async () => {
            const names: string[] = [];
            for (const url of starships.pilots) {
                const response = await fetch(url);
                const data = await response.json();
                names.push(data.name);
            }
            setPilotNames(names);
        };
        fetchPilotNames();
    }, [starships.pilots, starships.films]);

    return {
        pilotNames,
        films
    }
}