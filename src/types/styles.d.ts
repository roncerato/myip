import '@react-navigation/native';

declare module '@react-navigation/native' {
    type ThemeType = {
        dark: boolean;
        colors: {
            primary: string;
            background: string;
            card: string;
            text: string;
            border: string;
            notification: string;
            secondary: string;
            secondText: string;
        };
    };


    export interface Theme extends ThemeType { }
}
