import React, { createContext, useContext, useState, useEffect } from "react";

const DummyAccountContext = createContext();

export const useDummyAccount = () => {
  return useContext(DummyAccountContext);
};

export const DummyAccountProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    
    const storedUserId = sessionStorage.getItem("userId");
    return storedUserId ? parseInt(storedUserId) : 1;
  });

  const getUserId = () => {
    return userId;
  };

  const toggleUserId = () => {
    setUserId((prevUserId) => (prevUserId % 3) + 1);
  };

  useEffect(() => {
    sessionStorage.setItem("userId", userId);
  }, [userId]);

  return (
    <DummyAccountContext.Provider value={{ userId, getUserId, toggleUserId }}>
      {children}
    </DummyAccountContext.Provider>
  );
};

/** Lite fusk för att simulera ett riktigt account,
 *
 * Även som fusk så är det inte speciellt välbyggt då jag bör seperare constants and functions
 * Hade jag haft tid hade jag i så fall hellre bara fixat ett riktigt account system.
 *
 * SessionStorage är en key-value pair modell för att spara data, vilket i detta fall behålla datan
 * pga av mitt hack med att många aktioner återladdar sidan.
 */
