import React, { createContext, useReducer} from 'react';

export const ThemeContext = createContext();

const initialiseState = { darkMode : 'true' };

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode : !state.darkMode };
            default:
                return state;
    }
}


export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer,initialiseState);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
};

