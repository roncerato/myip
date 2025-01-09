import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ChevronDown from "../../../assets/images/svg/down-chevron.svg";
import { useTranslation } from "react-i18next";
import { langDropdownStyles } from "./LangDropdown.style";
import { useTheme } from "@react-navigation/native";
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
    const { colors } = useTheme()
    const changeLanguage = (key: string, label: string) => {
        i18n.changeLanguage(key);
        setIsOpened(false);
        setLang(label);
    };

    return (
        <View style={langDropdownStyles.container}>
            <View style={[langDropdownStyles.dropdownSelected, { borderColor: colors.border }]} onTouchEnd={() => setIsOpened(!isOpened)}>
                <Text style={[langDropdownStyles.dropdownSelectedText, { color: colors.text }]}>{lang}</Text>
                <ChevronDown width={10} height={10} fill={colors.secondText} />
            </View>
            {
                isOpened &&
                <View
                    style={[langDropdownStyles.dropdownContainer, {
                        borderColor: colors.border,
                        backgroundColor: colors.card,
                    }]}
                >
                    <FlatList
                        data={langs}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{
                            rowGap: 8
                        }}
                        renderItem={({ item }) => (
                            <View style={langDropdownStyles.dropdownItem}>
                                <View
                                    style={langDropdownStyles.dropdownItemIcon}>
                                    <Image
                                        source={item.icon}
                                        style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
                                </View>
                                <Text
                                    style={[langDropdownStyles.dropdownItemText, { color: colors.secondText }]}
                                    onPress={() => changeLanguage(item.key, item.label)}>
                                    {item.label}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            }
        </View>
    );
}