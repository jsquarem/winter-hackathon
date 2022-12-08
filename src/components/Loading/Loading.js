import React from "react";
import ReactLoading from "react-loading";
import './Loading.css'

export default function Loading() {
    return (
        <div className="loader">
            <h2 className="loadtext">We're on our way!</h2>
            <ReactLoading className="loadbubble" type="bubbles" color="#BDD9BF"
                height={100} width={150} />

            <img
                className="t-rex"
                src="https://i.pinimg.com/originals/ee/de/0e/eede0eccaf59ddda3e629f98bbfd0a10.gif"
                alt="t-rex"
            />
            <h2 className="loadtext">Sending you back to your profile page...</h2>
        </div>
    );
}