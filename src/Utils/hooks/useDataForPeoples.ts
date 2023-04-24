import {useEffect, useState} from "react";
import {IPeople} from "../../types/IPeople";

type IData = {
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
};

export const useDataForPeoples = (people: IPeople) => {
    const [data, setData] = useState<IData>({
        films: [],
        species: [],
        vehicles: [],
        starships: [],
    });

    const fetchValuesFromPeople = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data.name;
    };
    const fetchValuesFromFilm = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data.title;
    };

    useEffect(() => {
        const fetchPlanetData = async () => {
            const promises = [
                Promise.all(people.films.map(fetchValuesFromFilm)),
                Promise.all(people.species.map(fetchValuesFromPeople)),
                Promise.all(people.vehicles.map(fetchValuesFromPeople)),
                Promise.all(people.starships.map(fetchValuesFromPeople)),
            ];

            const [filmTitle, speciesName, vehiclesName, starshipName] = await Promise.all(promises);

            setData({
                films: filmTitle,
                species: speciesName,
                vehicles: vehiclesName,
                starships: starshipName,
            });
        };
        fetchPlanetData();
    }, [people.films, people.species, people.vehicles, people.starships]);

    return data;
};