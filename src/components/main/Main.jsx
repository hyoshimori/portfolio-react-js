import React, { useState } from "react";

import About from "./displayedContent/About";
import PersonalTimeline from "./displayedContent/PersonalTimeline";
import ProfessionalTimeline from "./displayedContent/ProfessionalTimeline";

import Styles from "../../styles/Main.module.css";

const Main = () => {
    const [view, setView] = useState("personalTimeline");

    return (
        <>
            <div className={Styles.main}>
                <div onClick={() => setView("personalTimeline")}>Personal</div>
                <div onClick={() => setView("professionalTimeline")}>
                    Professional
                </div>
                <div onClick={() => setView("about")}>About</div>
            </div>
            <div className={Styles.body}>
                <div>
                    {view === "personalTimeline" && <PersonalTimeline />}
                    {view === "professionalTimeline" && (
                        <ProfessionalTimeline />
                    )}
                    {view === "about" && <About />}
                </div>
            </div>
        </>
    );
};

export default Main;
