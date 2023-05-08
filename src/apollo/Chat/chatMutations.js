import { gql } from '@apollo/client';

export const createChat = gql`
    mutation($data: CreateChatInput!){
        createChat(data: $data)
    }
`;

export const updateChat = gql`
    mutation($chatData: ChatInput!,$data: UpdateChatInput!){
        updateChat(chatData: $chatData, data: $data)
    }
`;

export const deleteChat = gql`
    mutation($chat_id: ID!){
        deleteChat(chat_id: $chat_id)
    }
`;