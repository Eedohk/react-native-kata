import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native'
import {BaseUserI} from "@/model/users.interface";
import React from "react";
import {ThemedText} from "../ThemedText";
import {ThemedView} from "@/components/ThemedView";

export const BaseUser = ({children, user, loading}: {
    children?: React.ReactNode,
    user?: BaseUserI,
    loading: boolean
}) => {
    if (loading) {
        return <ActivityIndicator size="large"/>
    }

    if (user) {

        return <ThemedView>
            <ThemedText type={'title'}>{user.name}</ThemedText>
            <ThemedText type={'subtitle'}>Roles:</ThemedText>
            <FlatList data={user.roles} renderItem={({item: role}) => <ThemedText>{role}</ThemedText>}>
            </FlatList>
            {children && <View style={styles.childrenWrapper}>
                {children}
            </View>}
        </ThemedView>
    }
}

const styles = StyleSheet.create({
    childrenWrapper: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
        padding: 10,
        margin: 10,
    }
});
