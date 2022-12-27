import { useState, useEffect, createContext } from 'react';
import { isMobile } from 'react-device-detect';

export const IsMobileContext = createContext();

export const IsMobileProvider = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (isMobile) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    }

    return (
        <IsMobileContext.Provider
            value={{ isMobile }}
        >
            {children}
        </IsMobileContext.Provider>
    )
}