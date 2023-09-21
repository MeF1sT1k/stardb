export default class DummySwapiService {

    _people = [
        {
            id: 1,
            name: "Bilbo Baggins [TEST DATA]",
            gender: "male",
            birthYear: "long ago",
            eyeColor: "dark brown"
        },

        {
            id: 2,
            name: "Frodo Baggins [TEST DATA]",
            gender: "male",
            birthYear: "long ago",
            eyeColor: "dark brown"
        }
    ];

    _planets = [
        {
            id: 1,
            name: "Earth [TEST DATA]",
            population: "7.530.000.000",
            rotationPeriod: "23 hours 56 seconds",
            diameter: "12.742 km"
        },

        {
            id: 2,
            name: "Venus [TEST DATA]",
            population: "not known",
            rotationPeriod: "243 days",
            diameter: "12.104 km"
        }
    ];

    _starships = [
        {
            id: 1,
            name: "USS Enterprise [TEST DATA]",
            model: "NCC-1701-C",
            manufacturer: "Northrop Grumman Shipbuilding",
            costInCredits: "not known",
            length: "approx 300 meters",
            crew: 1000,
            passengers: 50,
            cargoCapacity: 100
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0];
    };

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async () => {
        return this._planets[0];
    };

    getAllStarships = async () => {
        return this._starships;
    };

    getStarship = async () => {
        return this._starships[0];
    };

    getPersonImage = () => {
        return "https://i.pinimg.com/474x/7e/bb/3f/7ebb3f6e8b8b20e8f29c657dbc67870f.jpg"
    };

    getPlanetImage = () => {
        return "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
    };

    getStarshipImage = () => {
        return "https://hallmarkstartrekornamentsdotcom.files.wordpress.com/2014/07/image4.jpg"
    };
}