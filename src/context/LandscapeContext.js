import React, { useState, createContext } from 'react';

export const LandscapeContext = createContext();

export const LandscapeProvider = ({ children }) => {

    const [landscape, setLandscape] = useState(false);

    const portrait = window.matchMedia('(orientation: portrait)');

    portrait.addEventListener('change', (event) => {
        if (event.matches) {
            setLandscape(false)
        } else {
            setLandscape(true)
        }
    })


    return (
        <LandscapeContext.Provider
            value={{ landscape }}
        >
            {children}
        </LandscapeContext.Provider>
    )

}