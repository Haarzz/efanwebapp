import { createContext } from "react";
import WebsocketService from "../websocket/websocket";
import { useContext } from "react";

const WebsocketContext = createContext();

export function useWebsocket() {
    return useContext(WebsocketContext);
}

// eslint-disable-next-line react/prop-types
export function WebsocketProvider({ children }){
    const websocketService = new WebsocketService

    return (
    <WebsocketContext.Provider value={ websocketService }>
        {children}
    </WebsocketContext.Provider>
    );
}