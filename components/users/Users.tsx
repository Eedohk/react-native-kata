import {ActivityIndicator, Button, FlatList, StyleSheet, View} from 'react-native'
import {ThemedText} from "../ThemedText"
import {ThemedView} from "../ThemedView"
import {useQuery} from '@apollo/client'
import {GET_USERS} from '@/gql/users.query'
import {BaseUserI} from '@/model/users.interface'
import {BaseUser} from './User'
import {Posts} from "@/components/posts/UserPosts";

export const Users = () => {
    const {data, loading} = useQuery<{ getAllUsers: BaseUserI[] }>(GET_USERS)

    const renderSelectedUser = (user: BaseUserI | undefined) => {
        if (!user) {
            return null;
        }
        // if (user?.roles?.includes('client')) {
        //
        // } else if (user?.roles?.includes('admin')) {
        //
        // } else if (user?.roles?.includes('manager')) {
        //
        // }

        return <BaseUser loading={false} user={user}>
            <Posts posts={user.posts}/>
        </BaseUser>
    }

    const renderUsers = () => {

        if (!data || loading) {
            return <ActivityIndicator size="large"/>
        }

        return <ThemedView>
            <ThemedText type="title">Users</ThemedText>
            <FlatList
                contentContainerStyle={styles.listItem}
                data={data.getAllUsers || []}
                renderItem={({item: user}) => <Button title={user.name} onPress={() => {
                }}>
                </Button>}
            >
            </FlatList>
            <ThemedView>
                {/*{renderSelectedUser()}*/}
            </ThemedView>
        </ThemedView>
    }

    return (<ThemedView style={styles.container}>
        {renderUsers()}
    </ThemedView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        gap: 15
    },
});
