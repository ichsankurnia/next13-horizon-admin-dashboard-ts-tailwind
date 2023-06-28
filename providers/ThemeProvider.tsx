'use client';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';


const ColorTheme = {
    light: 'light',
    dark: 'dark'
}

const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme') as keyof typeof ColorTheme;
        if (typeof storedPrefs === 'string') {
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light' // light theme as the default;
};


export interface ThemeContextInterface {
    theme: 'light' | 'dark',
    setTheme: (theme: 'light' | 'dark') => any
}

export const ThemeContext = createContext({} as ThemeContextInterface);


type Props = {
    children: ReactNode
};

export default function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

    const rawSetTheme = (rawTheme: string) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme, setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext)