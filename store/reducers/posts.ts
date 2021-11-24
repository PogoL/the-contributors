import Post from "../../models/Post";
import { ADD_POST } from "../actions/posts";

const initialState = {
    availablePosts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = new Post(
                action.postData.id,
                action.postData.title,
                action.postData.question,
                action.postData.description,
                action.postData.latitude,
                action.postData.longitude,
                'u1',
                action.postData.imageUrl
            );
            return {
                ...state,
                availablePosts: state.availablePosts.concat(newPost),
            };
    }
    return state;
};