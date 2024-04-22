import React, { useState, useContext } from "react";
import Styles from "../../styles/Banner.module.css";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const Banner = () => {
    const context = useContext(InitialContext);

    const arrOfKeys = ["imageURL", "bannerImageURL"];
    const targetProps = "profileProps";

    const objObValues = useValidatedContext(
        InitialContext,
        targetProps,
        arrOfKeys
    );

    const [bannerLoaded, setBannerLoaded] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);

    if (!objObValues) {
        return <></>;
    }

    const { dispatch } = context;

    const handleBannerLoad = () => {
        dispatch({ type: "true", payload: "banner" });
        setBannerLoaded(true);
    };

    const handleBannerError = () => {
        console.error("Failed to load banner image.");
        setBannerLoaded(false);
    };

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
                className={Styles.banner_image}
                src={objObValues.bannerImageURL}
                alt="banner"
                onLoad={handleBannerLoad}
                onError={handleBannerError}
                style={{ display: bannerLoaded ? "block" : "none" }}
            />
            <img
                className={Styles.profile_image}
                src={objObValues.imageURL}
                alt=""
                onLoad={handleProfileLoad}
                onError={handleProfileError}
                style={{ display: profileLoaded ? "block" : "none" }}
            />
        </div>
    );
};

export default Banner;
