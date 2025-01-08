import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

interface IThemeContextProps {
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
    isAutoTheme: boolean;
    setIsAutoTheme: Dispatch<SetStateAction<boolean>>;
    systemTheme: ColorSchemeName;
}

export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [isAutoTheme, setIsAutoTheme] = useState<boolean>(true)
    const systemTheme = useColorScheme()
    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, isAutoTheme, setIsAutoTheme, systemTheme }}>
            {children}
        </ThemeContext.Provider>)
}

export const useThemeContext = (): IThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};