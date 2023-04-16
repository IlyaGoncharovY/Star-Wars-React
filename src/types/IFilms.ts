import {IPlanet} from "./IPlanet";
import {IStarships} from "./IStarships";
import {IVehicles} from "./IVehicles";
import {ISpecies} from "./ISpecies";
import {IPeople} from "./IPeople";

export interface IFilms {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: IPeople[];
	planets: IPlanet[];
	starships: IStarships[];
	vehicles: IVehicles[];
	species: ISpecies[];
	created: string;
	edited: string;
	url: string;
}