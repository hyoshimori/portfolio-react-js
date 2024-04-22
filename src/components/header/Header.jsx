import React from "react";
import Logo from "./Logo";
// import NightMode from "./NightMode";
import Styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <div className={Styles.body}>
            <a
                target="_blank"
                href="https://github.com/hyoshimori/react-portfolio"
                className={Styles.git_link}
                rel="noreferrer"
            >
                <Logo />
            </a>
            {/* <NightMode /> */}
        </div>
    );
};

export default Header;
