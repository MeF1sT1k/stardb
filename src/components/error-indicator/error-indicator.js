import React from "react";
import "./error-indicator.css";
import icon from "./error.png";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator alert alert-dismissible alert-warning">
            <div>
                <h4 className="alert-heading">Boom!</h4>
                <p className="mb-0">
                    <span>Something has gone terrible wrong... <br /></span>
                    <span className="text-body-tertiary">(but we already sent droids to fix it)</span>
                </p>
            </div>
            <img src={icon} alt="error icon" />
        </div>
    );
};

export default ErrorIndicator;