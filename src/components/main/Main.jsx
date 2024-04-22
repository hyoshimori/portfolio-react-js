import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import About from "./displayedContent/About";
import PersonalTimeline from "./displayedContent/PersonalTimeline";
import ProfessionalTimeline from "./displayedContent/ProfessionalTimeline";

import Styles from "../../styles/Main.module.css";

const Main = () => {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.links}>
                    <Link to="/personal_timeline">
                        <div>Personal</div>
                    </Link>
                    <Link to="/professional_timeline">
                        <div>Professional</div>
                    </Link>
                    <Link to="/about">
                        <div>About</div>
                    </Link>
                </div>
            </div>
            <div className={Styles.body}>
                <Routes>
                    <Route
                        path="/personal_timeline"
                        element={<PersonalTimeline />}
                    />
                    <Route
                        path="/professional_timeline"
                        element={<ProfessionalTimeline />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PersonalTimeline />} />{" "}
                </Routes>
            </div>
        </>
    );
};

export default Main;
