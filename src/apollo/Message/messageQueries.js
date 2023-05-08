import { gql } from '@apollo/client';

export const getMessages = gql`
    query($chat_id: ID!){
        messages(chat_id: $chat_id) {
            _id
        }
    }
`;

export const getMessage = gql`
    query($message_id: ID!) {
        message(message_id: $message_id) {
            _id
            fromUser {
                _id
                NickName
                Name
            }
            Description
            Files {
                FileName
                FilePath
                FileType
                FileUrl
            }
            FullDate
            Date
            Time
            Month
        }
    }
`;