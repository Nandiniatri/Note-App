import { createContext, useEffect, useState } from "react";

export const allDataContext = createContext();

const AllDataContextProvider = ({ children }) => {
    const [bgColor, setBgColor] = useState([]);

    const fetchBGColor = async () => {
        const response = await fetch('/data/bgColor.json');
        const result = await response.json();
        setBgColor(result);
    }


    useEffect(() => {
        fetchBGColor();
    }, [])


    return (
        <allDataContext.Provider value={{
            bgColor
        }}>
            {children}
        </allDataContext.Provider>
    )
}

export default AllDataContextProvider;