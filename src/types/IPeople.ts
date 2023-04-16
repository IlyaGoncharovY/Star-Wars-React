import {IFilms} from "./IFilms";
import {ISpecies} from "./ISpecies";
import {IVehicles} from "./IVehicles";
import {IStarships} from "./IStarships";

export interface IPeople {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: IFilms[];
	species: ISpecies[];
	vehicles: IVehicles[];
	starships: IStarships[];
	created: string;
	edited: string;
	url: string;
}

