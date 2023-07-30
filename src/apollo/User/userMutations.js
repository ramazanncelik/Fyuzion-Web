import { gql } from '@apollo/client'

export const addUser = gql`
    mutation($data: CreateUserInput!){
        createUser(data: $data) {
            emailExist
            nickNameExist
            success
        }
    }
`;

export const updateUser = gql`
    mutation($_id: ID!, $data: UpdateUserInput!) {
        updateUser(_id: $_id, data: $data) {
            nickNameExist
            success
        }
    }
`;

export const updatePassword = gql`
    mutation($data: UpdatePasswordInput!) {
        updatePassword(data: $data) {
            success
            userExist
        }
    }
`;

export const updateEmailVerify = gql`
    mutation($data: UpdateEmailVerifyInput!) {
        updateEmailVerify(data: $data) {
            success
            userExist
        }
    }
`;

export const createResetPasswordMail = gql`
    mutation($data: CreateMailInput!){
        createResetPasswordMail(data: $data)
    }
`;

export const createEmailVerifyMail = gql`
    mutation($data: CreateMailInput!){
        createEmailVerifyMail(data: $data)
    }
`;