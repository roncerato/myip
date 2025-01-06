import { Theme } from "@react-navigation/native";

export const customDarkTheme: Theme = {
    dark: true,
    colors: {
        primary: "#0F63FF",
        background: "rgb(1,1,1)",
        card: "#171719",
        text: "#fff",
        border: "#9d9d9d",
        notification: "",
        secondary: "",
        secondText: "#9d9d9d"
    }
}

export const customDefaultTheme: Theme = {
    dark: false,
    colors: {
        primary: "#0F63FF",
        background: "#F6F6F8",
        card: "#FCFCFE",
        text: "#010101",
        border: "#E4E4E6",
        notification: "",
        secondary: "",
        secondText: "rgb(109, 109, 109)"
    }
}