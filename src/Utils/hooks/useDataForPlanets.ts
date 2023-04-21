import { useEffect, useState } from "react";
import { IFilms } from "../../types/IFilms";

type IData = {
    charters: string[],
    planets: string[],
    starships: string[],
    species: string[],
    vehicles: string[]
};

export const useDataForPlanets = (films: IFilms) => {
    const [data, setData] = useState<IData>({
        charters: [],
        planets: [],
        starships: [],
        species: [],
        vehicles: []
    });

    const fetchValuesFromPlanet = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data.name;
    };

    useEffect(() => {
        const fetchPlanetData = async () => {
            const promises = [
                Promise.all(films.characters.map(fetchValuesFromPlanet)),
                Promise.all(films.planets.map(fetchValuesFromPlanet)),
                Promise.all(films.starships.map(fetchValuesFromPlanet)),
                Promise.all(films.species.map(fetchValuesFromPlanet)),
                Promise.all(films.vehicles.map(fetchValuesFromPlanet))
            ];

            const [charterName, planetName, starshipName, speciesName, vehiclesName] = await Promise.all(promises);

            setData({
                charters: charterName,
                planets: planetName,
                starships: starshipName,
                species: speciesName,
                vehicles: vehiclesName
            });
        };
        fetchPlanetData();
    }, [films.characters, films.planets, films.starships, films.species, films.vehicles]);

    return data;
};