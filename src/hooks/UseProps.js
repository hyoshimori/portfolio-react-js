import axios from "axios";

export const useProps = () => {
    const instance = axios.create({
        headers: { "Content-Type": "application/json" },
        responseType: "json",
        baseURL: ``,
    });
    return { axios: instance };
};
