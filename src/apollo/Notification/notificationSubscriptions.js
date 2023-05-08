import { gql } from '@apollo/client';

export const notificationCreated = gql`
    subscription($user_id: ID!){
        notificationCreated(user_id: $user_id){
            _id
            From
            To
            Type
            PostId
            FullDate
            Date
            Time
            Month
            fromUser{
                _id
                NickName
                Name
                ImageUrl
            }
        }
    }
`;