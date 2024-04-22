import React, { useState, useContext } from "react";
import Styles from "../../styles/Banner.module.css";

import { InitialContext } from "../../App";
import useValidatedContext from "../../utility/useValidatedContext";

const Banner = () => {
    const context = useContext(InitialContext);

    const arrOfKeys = ["bannerImageURL"];
    const targetProps = "profileProps";

    const objObValues = useValidatedContext(
        InitialContext,
        targetProps,
        arrOfKeys
    );

    const [bannerLoaded, setBannerLoaded] = useState(false);

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
        </div>
    );
};

export default Banner;
