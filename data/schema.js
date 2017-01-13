import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat
} from 'graphql';

import axios from 'axios';

const query = new GraphQLObjectType({
    name: "Query",
    description: "First GraphQL Server Config - Yay!",
    fields: () => ({
        gitHubUser: {
            type: UserInfoType,
            description: "Github user API data with enhanced and additional data",
            args: {
                username: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "The github user login you want information on"
                }
            },
            resolve: (_, {username}) => {
                const url = `https://api.github.com/users/${username}`;
                return axios.get(url)
                    .then(function (response) {
                        return response.data;
                    })
            }
        }
    })
});

const UserInfoType = new GraphQLObjectType({
        name: "UserInfo",
        description: "Basic Information on a github User",
        fields: () => ({
            "login": {type: GraphQLString},
            "id": {type: GraphQLInt},
            "avatar_url": {type: GraphQLString},
            "site_admin": {type: GraphQLBoolean},
            "following_url": {
                type: GraphQLString,
                resolve: (obj) => {
                    const brackIndex = obj.following_url.indexOf("{");
                    return obj.following_url.slice(0, brackIndex);
                }
            },
        })
    });

const schema = new GraphQLSchema({
    query
});

export default schema;
