import React from "react";

import Styles from "../../../styles/About.module.css";

import { InitialContext } from "../../../App";
import useValidatedContext from "../../../utility/useValidatedContext";

const About = () => {
    const targetProps = "aboutProps";
    const arrOfKeys = ["about", "title"];
    const objObValues = useValidatedContext(
        InitialContext,
        targetProps,
        arrOfKeys
    );

    if (!objObValues) {
        return <></>;
    }
    return (
        <div className={Styles.body}>
            <h3>{objObValues.title}</h3>
            <p>{objObValues.about}</p>
        </div>
    );
};

export default About;
