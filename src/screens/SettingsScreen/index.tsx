import { ScrollView, StyleSheet, Text, View } from "react-native";
import LangDropdown from "../../components/LangDropdown";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import AutoThemeSwitcher from "../../components/SystemThemeSwitcher";

export default function SettingsScreen() {
    const { t } = useTranslation();
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: colors.card,
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderRadius: 8,
                position: "relative",
                top: 0,
                zIndex: 99999
            }}>
                <Text style={[styles.text, { color: colors.text }]}>
                    {t("settingScreen.language")}
                </Text>
                <LangDropdown />
            </View>
            <View
                style={{
                    backgroundColor: colors.card,
                    borderRadius: 8
                }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 0,
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                }}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {t("settingScreen.systemTheme")}
                    </Text>
                    <AutoThemeSwitcher />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 0,
                    backgroundColor: colors.card,
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                    borderRadius: 8
                }}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {t("settingScreen.dark")} {t("settingScreen.theme").toLowerCase()}
                    </Text>
                    <ThemeSwitcher />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 18,
        gap: 16
    },
    text: {
        fontSize: 16,
        fontFamily: "Jost-Bold",
        color: "#fff"
    }
})