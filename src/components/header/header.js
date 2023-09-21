import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex sticky-top border-bottom">
            <h2>
                <Link to="/">Star DB</Link>
            </h2>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/people">People</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/planets">Planets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/starships">Starships</Link>
                </li>
            </ul>

            {/* <button
                className="btn btn-sm btn-outline-primary"
                onClick={onServiceChange}>
                Change Service
            </button> */}
        </div>
    )
};

export default Header;