import { ADD_POST } from '../reducers/home.reducer';

export const newPostHandler = (post) => {
    return {
        type: ADD_POST,
        value: post,
    }
};