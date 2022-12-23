import { useState, useEffect, createContext } from 'react';

export const IsMobileContext = createContext();

export const IsMobileProvider = ({children}) => {

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1000) {
          setIsMobile(true)
        }
        else {
          setIsMobile(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <IsMobileContext.Provider
            value={{ isMobile }}
        >
            {children}
        </IsMobileContext.Provider>
    )
}