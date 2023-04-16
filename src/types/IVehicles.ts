import {IFilms} from "./IFilms";
import {IPeople} from "./IPeople";

export interface IVehicles {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	pilots: IPeople[];
	films: IFilms[];
	created: string;
	edited: string;
	url: string;
}