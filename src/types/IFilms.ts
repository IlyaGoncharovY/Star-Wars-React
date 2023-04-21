export interface IFilms {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	// characters: IPeople[];
	characters: string[];
	// planets: IPlanet[];
	planets: string[];
	// starships: IStarships[];
	starships: string[];
	// vehicles: IVehicles[];
	vehicles: string[];
	// species: ISpecies[];
	species: string[];
	created: string;
	edited: string;
	url: string;
}