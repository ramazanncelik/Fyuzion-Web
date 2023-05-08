import {gql} from '@apollo/client';

export const messageCreated = gql`
    subscription($chat_id: ID!) {
        messageCreated(chat_id: $chat_id) {
            _id
        }
    }
`;