import {gql} from "@apollo/client";

const base_user_properties = `
    roles
    name
    id
`

export const GET_USERS = gql`
    query {
        getAllUsers {
            ${base_user_properties}
        }
    }
`

export const GET_USER = gql`
    query($userId: Float!) {
        getUserPosts(userId: $userId) {
            ${base_user_properties}
            posts {
                id
                text
            }
        }
    }
`
