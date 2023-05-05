import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type StateContextType = {
    selectedTab: string
    setSelectedTab: Dispatch<SetStateAction<string>>
}

const StateContext = createContext<StateContextType>({
  selectedTab: 'home',
  setSelectedTab: () => null
});

export function StateProvider({ children }: { children: React.ReactNode }) {
    const [selectedTab, setSelectedTab] = useState<string>('home')
    return (
        <StateContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </StateContext.Provider>
    )
}

export const  useStateContext = () => useContext(StateContext)