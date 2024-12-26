import { ScrollView, StyleSheet, Text, View } from "react-native";
import LangDropdown from "../../components/LangDropdown";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.text}>
                    {t("settingScreen.language")}
                </Text>
                <LangDropdown />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 36,
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 16,
        fontFamily: "Jost-Bold",
        marginBottom: 8,
        color: "#fff"
    }
})