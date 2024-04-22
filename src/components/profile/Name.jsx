import React, { useState, useContext } from "react";
import Styles from "../../styles/Name.module.css";

import VerifiedIcon from "@mui/icons-material/Verified";
import GitHubIcon from "@mui/icons-material/GitHub";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const Name = () => {
    const context = useContext(InitialContext);

    const arrOfKeys = ["name", "imageURL"];
    const targetProps = "profileProps";

    const objObValues = useValidatedContext(
        InitialContext,
        targetProps,
        arrOfKeys
    );

    const [profileLoaded, setProfileLoaded] = useState(false);

    if (!objObValues) {
        return <></>;
    }

    const { dispatch } = context;

    const handleProfileLoad = () => {
        dispatch({ type: "true", payload: "profileImage" });
        setProfileLoaded(true);
    };

    const handleProfileError = () => {
        console.error("Failed to load profile image.");
        setProfileLoaded(false);
    };

    return (
        <div className={Styles.body}>
            <img
                className={Styles.profile_image}
                src={objObValues.imageURL}
                alt=""
                onLoad={handleProfileLoad}
                onError={handleProfileError}
                style={{ display: profileLoaded ? "block" : "none" }}
            />
            <div>
                <div className={Styles.name}>{objObValues.name}</div>
                <a
                    target="_blank"
                    href="https://github.com/hyoshimori/react-portfolio"
                    className={Styles.git_link}
                    rel="noreferrer"
                >
                    <GitHubIcon />
                    <span>LINK</span>
                </a>
            </div>
        </div>
    );
};

export default Name;
