import { gql } from "@apollo/client";

export const getComments = gql`
    query($post_id: ID!){
        comments(post_id: $post_id) {
            _id
            OwnerId
            PostId
            Description
            Date
            Time
            user {
                _id
                ImageUrl
                NickName
                Name
            }
        }
    }
`;