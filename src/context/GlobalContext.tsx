import React, { useContext } from "react"

type GlobalContextProviderTypes = {
    children: React.ReactNode;
}

type GlobalContextTypes = {
    test: () => void;
    barActive: boolean;
    closeBar: () => void;
    openBar: () => void;
};

const GlobalContext = React.createContext({} as GlobalContextTypes);

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalContextProvider = ({ children }: GlobalContextProviderTypes) => {
    const test = () => {
        console.log("test");
    };

    const [barActive, setBarActive] = React.useState<boolean>(false)

    const closeBar = () => setBarActive(false)
    const openBar = () => setBarActive(true)

    return (
        <GlobalContext.Provider
            value={{
                test,
                barActive,
                closeBar,
                openBar
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
