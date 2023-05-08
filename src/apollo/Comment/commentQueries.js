import { gql } from "@apollo/client";

export const getComments = gql`
    query($post_id: ID!){
        comments(post_id: $post_id) {
            _id
            OwnerId
            PostId
            Description
            FullDate
            Date
            Time
            Month
            user {
                _id
                ImageUrl
                NickName
                Name
            }
        }
    }
`;