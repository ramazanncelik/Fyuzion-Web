import { gql } from "@apollo/client";

export const commentCreated = gql`
    subscription($post_id: ID!) {
        commentCreated(post_id: $post_id) {
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