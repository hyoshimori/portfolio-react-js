import { useContext } from "react";

function useValidatedContext(contextObject, propsName, arrOfKeys = []) {
    const context = useContext(contextObject);
    if (!context) {
        return null;
    }

    const arrOfPosts = [];
    const objOfInformation = {};

    if (propsName === "postProps") {
        context["initialProps"]["postProps"].forEach((el) => {
            if (context["initialProps"] && context["initialProps"][propsName]) {
                arrOfPosts.push(el);
            } else {
                console.error("Error: No postProps found in context");
                return null;
            }
        });
        return arrOfPosts;
    }

    arrOfKeys.forEach((el) => {
        if (context["initialProps"] && context["initialProps"][propsName]) {
            objOfInformation[el] = context["initialProps"][propsName][el];
        } else {
            console.error("Error: No profileProps found in context");
            return null;
        }
    });
    return objOfInformation;
}

export default useValidatedContext;
