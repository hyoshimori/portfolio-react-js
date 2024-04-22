import React from "react";
import Styles from "../../styles/Profile.module.css";

import { MiniSections, Name } from "../index";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const Profile = () => {
    const arrOfKeys = ["message", "codingLanguages"];
    const targetProps = "profileProps";

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
            <Name />
            <div className={Styles.profile_description}>
                {objObValues.message}
            </div>
            <div className={Styles.profile_description}>
                {objObValues.codingLanguages?.map((el, index) => {
                    return <span key={index}>#{el} </span>;
                })}
            </div>
            <MiniSections />
        </div>
    );
};

export default Profile;
