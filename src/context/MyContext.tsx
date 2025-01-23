import React, { createContext } from "react";

type MyContextType = {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType>({
    trigger: false,
    setTrigger: () => {}
});