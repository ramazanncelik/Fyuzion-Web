"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('tr');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLanguage(navigator.language);
            const storedDarkMode = localStorage.getItem('isDarkMode');
            setIsDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : false);
            const storedUserId = localStorage.getItem('fyuzion-userId');
            setUserId(storedUserId ? JSON.parse(storedUserId) : null);
        }
    }, []);

    const setAndStoreDarkMode = (value) => {
        localStorage.setItem('isDarkMode', JSON.stringify(value));
        setIsDarkMode(value);
    };

    const changeThemeMode = () => {
        const newMode = !isDarkMode;
        setAndStoreDarkMode(newMode);
    };

    const setAndStoreUserId = (value) => {
        localStorage.setItem('fyuzion-userId', JSON.stringify(value));
        setUserId(value);
    };

    const changeUserId = (value) => {
        setAndStoreUserId(value);
    };

    const data = useMemo(
        () => ({
            language,
            isDarkMode,
            userId,
            changeThemeMode,
            changeUserId
        }),
        [isDarkMode, language, userId]
    );

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}

export { AppContext, AppProvider, useAppContext };