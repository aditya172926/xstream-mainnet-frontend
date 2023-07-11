import React, { useState, createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [streamNotifications, setStreamNotifications] = useState([]);
    const [showDashboard, setDashboard] = useState(false);
    const [showSendStream, setSendStream] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showXStream, setShowXStream] = useState(false);
    const [showStream, setShowStream] = useState(false);

    const value = {
        showStream, setShowStream,
        showXStream, setShowXStream,
        showNotification, setShowNotification,
        showSendStream, setSendStream,
        showDashboard, setDashboard,
        streamNotifications, setStreamNotifications
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}   

export const useAppContext = () => useContext(AppContext);
