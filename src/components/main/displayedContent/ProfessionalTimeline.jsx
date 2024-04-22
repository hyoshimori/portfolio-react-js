import React from "react";
import Styles from "../../../styles/ProfessionalTimeline.module.css";

import { InitialContext } from "../../../App";
import useValidatedContext from "../../../utility/useValidatedContext";

const ProfessionalTimeline = () => {
    const arrOfKeys = [
        "id",
        "title",
        "company",
        "date",
        "description",
        "technologies",
    ];
    const targetProps = "experienceProps";

    const objObValues = useValidatedContext(
        InitialContext,
        targetProps,
        arrOfKeys
    );

    if (!objObValues) {
        return <></>;
    }

    // WIP: Add loop to this and use the objObValues

    return (
        <div className={Styles.body}>
            <div className={Styles.job}>
                <h3>System Engineer</h3>
                <p>CYCNUS Co., Ltd. - Tokyo, Japan</p>
                <p>Dec 2023 - Present</p>
                <p className={Styles.description}>
                    Contract development
                    <br />
                    Technologies: Python, JavaScript, HTML, CSS, React,
                    Pyppeteer
                </p>
            </div>
            <div className={Styles.job}>
                <h3>Fullstack Javascript Engineer</h3>
                <p>Lunaris GK - Tokyo, Japan</p>
                <p>Jun 2023 - Nov 2023</p>
                <p className={Styles.description}>
                    In-house development
                    <br />
                    Technologies: JavaScript, Elixir, React, Phoenix, HTML, CSS,
                    Liquid
                </p>
            </div>
        </div>
    );
};

export default ProfessionalTimeline;
