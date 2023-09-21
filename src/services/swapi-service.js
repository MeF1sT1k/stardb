export default class SwapiService {

    _apiBase = `https://swapi.dev/api`

    getPersonImage = ({ id }) => {
        return `./img/characters/${id}.jpg`
    };

    getStarshipImage = ({ id }) => {
        return `./img/starships/${id}.jpg`
    };

    getPlanetImage = ({ id }) => {
        return `./img/planets/${id}.jpg`
    };

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}
      received ${res.status}`)
        }
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _getIdForStarship = (starship) => {
        if (starship.name === "CR90 corvette") return 2;
        if (starship.name === "Star Destroyer") return 3;
        if (starship.name === "Sentinel-class landing craft") return 5;
        if (starship.name === "Death Star") return 9;
        if (starship.name === "Millennium Falcon") return 10;
        if (starship.name === "Y-wing") return 11;
        if (starship.name === "X-wing") return 12;
        if (starship.name === "TIE Advanced x1") return 13;
        if (starship.name === "Executor") return 15;
        if (starship.name === "Rebel transport") return 17;
    };

    _transformStarship = (starship) => {
        return {
            id: this._getIdForStarship(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    }
}