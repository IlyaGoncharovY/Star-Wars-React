import {IFilms} from "./IFilms";
import {IPeople} from "./IPeople";

export interface IPlanet {
	climate: string;
	created: string;
	diameter: string;
	edited: string;
	films: IFilms[];
	gravity: string;
	name: string;
	orbital_period: string;
	population: string;
	residents: IPeople[];
	rotation_period: string;
	surface_water: string;
	terrain: string;
	url: string;
}