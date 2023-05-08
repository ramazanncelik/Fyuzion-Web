import { gql } from '@apollo/client'

export const addUser = gql`
    mutation($data: CreateUserInput!){
        createUser(data: $data)
    }
`;

export const updateUser = gql`
    mutation($_id: ID!, $data: UpdateUserInput!){
        updateUser(_id: $_id, data: $data)
    }
`;

export const createResetPasswordMail = gql`
    mutation($data: CreateMailInput!){
        createResetPasswordMail(data: $data)
    }
`;

export const updatePassword = gql`
    mutation($data: UpdatePasswordInput!){
        updatePassword(data: $data)
    }
`;