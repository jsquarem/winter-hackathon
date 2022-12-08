import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div>
            <h2>We're on our way!</h2>
            <ReactLoading type="bubbles" color="#0000FF"
                height={100} width={50} />

            <img
                className="t-rex"
                src="https://i.pinimg.com/originals/ee/de/0e/eede0eccaf59ddda3e629f98bbfd0a10.gif"
                alt="t-rex"
            />
            <h2>Sending you back to your profile page...</h2>
        </div>
    );
}