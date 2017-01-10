import {
    GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'BlogPost',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLString
        },
        description: {
            type: GraphQLString
        }
    }
});
