import React, { Component } from "react";
import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet/random-planet";

import ErrorBoundry from "../error-boundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PeoplePage, PlanetsPage, StarshipPage } from "../pages";


export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService

            return {
                swapiService: new Service
            }
        })
    };

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="app column" >
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Routes>
                                <Route path="/" element={<h2 className="title">Welcome to StarDB</h2>} />
                                <Route path="/people" element={<PeoplePage />} />
                                <Route path="/planets" element={<PlanetsPage />} />
                                <Route path="/starships" element={<StarshipPage />} />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}