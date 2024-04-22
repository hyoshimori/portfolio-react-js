import React, { useState, useContext } from "react";

// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PushPinIcon from "@mui/icons-material/PushPin";

import { InitialContext } from "../../../App";
import Styles from "../../../styles/PersonalTimeline.module.css";
import useValidatedContext from "../../../utility/useValidatedContext";

const PersonalTimeline = () => {
    const context = useContext(InitialContext);

    const targetProps = "postProps";
    const objObValues = useValidatedContext(InitialContext, targetProps);

    const [profileLoaded, setProfileLoaded] = useState(false);
    const [projectLoaded, setProjectLoaded] = useState(false);

    if (!objObValues) {
        return <></>;
    }

    const { dispatch } = context;

    const handleProfileLoad = () => {
        dispatch({ type: "true", payload: "profileImageInPersonalTimeLine" });
        setProfileLoaded(true);
    };

    const handleProfileError = () => {
        console.error("Failed to load profile image.");
        setProfileLoaded(false);
    };

    const handleProjectLoad = () => {
        dispatch({ type: "true", payload: "projectImageInPersonalTimeLine" });
        setProjectLoaded(true);
    };

    const handleProjectError = () => {
        console.error("Failed to load project image.");
        setProjectLoaded(false);
    };

    return (
        <div className={Styles.body}>
            {objObValues.map((el, index) => {
                return (
                    <div className={Styles.post} key={index}>
                        <div className={Styles.icon}>
                            <img
                                src={el.imageURL}
                                alt=""
                                onLoad={handleProfileLoad}
                                onError={handleProfileError}
                                style={{
                                    display: profileLoaded ? "block" : "none",
                                }}
                            />
                        </div>
                        <div>
                            {el.pinned ? (
                                <div className={Styles.pinned}>
                                    <PushPinIcon />
                                    <div>Pinned</div>
                                </div>
                            ) : null}
                            <div className={Styles.upper_posts}>
                                <div
                                    className={Styles.upper_posts_name_and_time}
                                >
                                    <div className={Styles.name_and_emoji}>
                                        <strong>
                                            <div>{el.name}</div>
                                        </strong>
                                        <div>{el.time}</div>
                                    </div>
                                </div>
                                <div className={Styles.emotion}>
                                    {el.emotion}
                                </div>
                            </div>
                            <div className={Styles.post_content}>
                                <div className={Styles.title_and_status}>
                                    <div className={Styles.title}>
                                        {el.title}
                                    </div>
                                    <div>- {el.status}</div>
                                </div>
                                <div>{el.message}</div>
                                <img
                                    src={el.projectImageUrl}
                                    alt=""
                                    onLoad={handleProjectLoad}
                                    onError={handleProjectError}
                                    style={{
                                        display: projectLoaded
                                            ? "block"
                                            : "none",
                                    }}
                                />
                            </div>
                            <div className={Styles.lower_posts}>
                                <FavoriteIcon style={{ opacity: 0.1 }} />
                                {/* <ContentCopyIcon /> */}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PersonalTimeline;
