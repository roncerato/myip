import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../constants/rootStyles";
import ChevronDown from "../../../assets/images/svg/down-chevron.svg";
import { useTranslation } from "react-i18next";
import { langDropdownStyles } from "./LangDropdown.style";
const langs = [
    {
        label: "РУ",
        key: "ru",
        icon: require("../../../assets/images/ru.png")
    },
    {
        label: "EN",
        key: "en",
        icon: require("../../../assets/images/us.png")
    }
]

export default function LangDropdown() {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language === "en" ? "EN" : "РУ");
    const [isOpened, setIsOpened] = useState(false);

    const changeLanguage = (key: string, label: string) => {
        i18n.changeLanguage(key);
        setIsOpened(false);
        setLang(label);
    };

    return (
        <View style={langDropdownStyles.container}>
            <View style={langDropdownStyles.dropdownSelected} onTouchEnd={() => setIsOpened(!isOpened)}>
                <Text style={langDropdownStyles.dropdownSelectedText}>{lang}</Text>
                <ChevronDown width={10} height={10} fill={theme.dark.lightgrey} />
            </View>
            {
                isOpened &&
                <FlatList
                    contentContainerStyle={langDropdownStyles.dropdownContainer}
                    // style={langDropdownStyles.dropdownContainer}
                    data={langs}
                    renderItem={({ item }) => (
                        <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
                            <View style={langDropdownStyles.dropdownItemIcon}>
                                <Image
                                    source={item.icon}
                                    style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
                            </View>
                            <Text style={langDropdownStyles.dropdownItemText} onPress={() => changeLanguage(item.key, item.label)}>
                                {item.label}
                            </Text>
                        </View>
                    )}
                    keyExtractor={item => item.key}
                />
            }
        </View>
    );
}