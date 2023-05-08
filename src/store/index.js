import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import myPosts from './myPosts'
import modal from './modal'

const store = configureStore({
    reducer: {
        auth,
        myPosts,
        modal
    }
})

export default store;