import React from "react";
import Styles from "../../styles/MiniSections.module.css";

import BusinessIcon from "@mui/icons-material/Business";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LinkIcon from "@mui/icons-material/Link";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const MiniSections = () => {
    const arrOfKeys = ["instagramURL", "birthday", "joinedDate"];
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
            <div className={Styles.each_mini_section}>
                <EventAvailableIcon />
                <div>Available</div>
            </div>
            <div className={Styles.each_mini_section}>
                <a
                    href={objObValues.instagramURL}
                    target="_blank"
                    className={Styles.instagram_link}
                    rel="noreferrer"
                >
                    <LinkIcon className={Styles.LinkIcon} />
                    <div>Instagram</div>
                </a>
            </div>
            <div className={Styles.each_mini_section}>
                <CelebrationIcon />
                <div>{objObValues.birthday}</div>
            </div>
            {/* <div className={Styles.each_mini_section}>
                <BusinessIcon />
                <div>Joined, {objObValues.joinedDate}</div>
            </div> */}
        </div>
    );
};

export default MiniSections;
