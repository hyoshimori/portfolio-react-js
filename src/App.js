import React, { createContext, useState, useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";

import { Banner, Footer, Header, Main, Profile } from "./components/index";

import defaultPostProps from "../src/store/InitialView";
import { BrowserRouter } from "react-router-dom";

// Color Palette
// https://coolors.co/292f36-4ecdc4-f7fff7-ff6b6b-ffe66d

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login", {
                email,
                password,
            });
            console.log("User logged in successfully:", response.data);
        } catch (error) {
            console.error("Login error:", error.response);
        }
    };

    const [state, dispatch] = useReducer(reducer, isImagesFullyLoaded);
    const [initialProps, setInitialProps] = useState(
        props.initialProps || defaultPostProps
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isAllImagesLoaded, setIsAllImagesLoaded] = useState(false);
    const [, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await api.get("/");
            console.log("response", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching users", error);
            throw error;
        }
    };

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error("Error fetching users", error);
            });
    }, []);

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
            <BrowserRouter>

                <form onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.targetValueType)}
                            required
                        />
                    </label>
                    <button type="submit">Log In</button>
                </form>

                <div className="app">
                    <Header />
                    <Banner />
                    <Profile />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </InitialProvider>
    );
}

export default App;
