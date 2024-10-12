import React from "react";
import { ScrollView, View, Text } from "react-native";
import ListItem from "../ListItem";
import { globalInfoStyles } from "./GlobalInfo.style";
import MainBlock from "../MainBlock";
import { IGlobalInfo } from "./GlobalInfo.props";


export default function GlobalInfo({ data }: IGlobalInfo) {
    return (
        <ScrollView>
            <View style={globalInfoStyles.container}>
                <View style={globalInfoStyles.country}>
                    <View style={globalInfoStyles.countryImg}>

                    </View>

                    <Text style={globalInfoStyles.countryName}>
                        Германия
                    </Text>

                </View>
                    <MainBlock name={"IP"} value={"142.111.162.207"} />

                <View style={globalInfoStyles.mainBlock}>
                    <MainBlock name={"Широта"} value={"52.5229"} />
                    <MainBlock name={"Долгота"} value={"13.4896"} />
                </View>

                <ListItem name={"Проdайдер"} value={"InterLIR GmbH"} />
                <ListItem name={"Прокси"} value={"Не используется"} />
                <ListItem name={"Город"} value={"Берлин"} />
                <ListItem name={"Континент"} value={"Европа"} />
                <ListItem name={"Код страны"} value={"DE"} />
            </View>
        </ScrollView>
    )
}
