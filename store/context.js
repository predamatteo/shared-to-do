import { createContext, useState } from "react";

export const AppContext = createContext({
    room : '',
    setRoom: (room) => {},
    getRoom: () =>{}
});

function AppContextProvider ({children}){
    const [appRoom, setAppRoom] = useState();

    function setRoom(room){
        setAppRoom(room);
    }
    function getRoom(){
        return appRoom;
    }
    const value = {
        room : appRoom,
        setRoom: setRoom,
        getRoom: getRoom
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;