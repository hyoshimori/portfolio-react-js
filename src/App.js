import React, { createContext, useState, useEffect, useReducer } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import defaultPostProps from "../src/store/InitialView";

// Color Palette
// https://coolors.co/292f36-4ecdc4-f7fff7-ff6b6b-ffe66d

export const InitialContext = createContext(defaultPostProps);

export const InitialProvider = ({ children, value }) => {
    return (
        <InitialContext.Provider value={value}>
            {children}
        </InitialContext.Provider>
    );
};

const isImagesFullyLoaded = {
    banner: false,
    profileImage: false,
    profileImageInPersonalTimeLine: false,
    projectImageInPersonalTimeLine: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "true":
            return { ...state, [action.payload]: true };
        case "false":
            return { ...state, [action.payload]: false };
        default:
            throw new Error();
    }
};

function App(props) {
    const [state, dispatch] = useReducer(reducer, isImagesFullyLoaded);
    const [initialProps, setInitialProps] = useState(
        props.initialProps || defaultPostProps
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isAllImagesLoaded, setIsAllImagesLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (
            state.banner === true &&
            state.profileImage === true &&
            state.profileImageInPersonalTimeLine === true
        ) {
            setIsAllImagesLoaded(true);
        }
    }, [state]);

    if (isLoading && !isAllImagesLoaded) {
        return (
            <div className="loading_screen">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <InitialProvider
            value={{ initialProps, setInitialProps, state, dispatch }}
        >
            <div className="app">
                <Header />
                <Banner />
                <Profile />
                <Main />
                <Footer />
            </div>
        </InitialProvider>
    );
}

export default App;
