import React from "react";
import Styles from "../../styles/Name.module.css";

import VerifiedIcon from "@mui/icons-material/Verified";
import GitHubIcon from "@mui/icons-material/GitHub";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const Name = () => {
    const arrOfKeys = ["name"];
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
    );
};

export default Name;
