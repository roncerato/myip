import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import ListItem from "../ListItem";
import { globalInfoStyles } from "./GlobalInfo.style";
import MainBlock from "../MainBlock";
import { IGlobalInfo } from "./GlobalInfo.props";
import { theme } from "../../constants/rootStyles";
import { ipInfoStyles } from "../IPInfo/IPInfo.style";


export default function GlobalInfo({ data, flag }: IGlobalInfo) {
    return (
        <ScrollView>
            <View style={globalInfoStyles.container}>
                <View style={globalInfoStyles.country}>
                    <View
                        style={[

                            ipInfoStyles.flag,
                            { backgroundColor: theme.dark.primaryColor },
                            ipInfoStyles.image
                        ]}
                    >
                        {
                            flag !== undefined ? <Image source={flag} style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                            /> : null
                        }
                    </View>

                    <Text style={globalInfoStyles.countryName}>
                        {data?.country}
                    </Text>

                </View>
                <MainBlock name={"IP"} value={data?.query} />

                <View style={globalInfoStyles.mainBlock}>
                    <MainBlock name={"Широта"} value={String(data?.lat)} />
                    <MainBlock name={"Долгота"} value={String(data?.lon)} />
                </View>

                <ListItem name={"Провайдер"} value={data?.asname} />
                <ListItem name={"Прокси"} value={data?.proxy ? "Используется" : "Не используется"} />
                <ListItem name={"Город"} value={data?.city} />
                <ListItem name={"Континент"} value={data?.continent} />
                <ListItem name={"Код страны"} value={data?.countryCode} />
            </View>
        </ScrollView>
    )
}
