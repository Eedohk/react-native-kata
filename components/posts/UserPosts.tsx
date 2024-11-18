import {PostI} from "@/model/users.interface";
import {FlatList, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import React from "react";

export const Posts = ({posts}: { posts: PostI[] }) => <>
    <ThemedText type={'subtitle'}>Posts:</ThemedText>
    <FlatList
        data={posts}
        renderItem={post => <View>
            <ThemedText>{post.item.text}</ThemedText>
        </View>}
    >
    </FlatList>
</>
