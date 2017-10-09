import { Map, List } from "immutable";

const POST_PUBLISH = "POST_PUBLISH";
const POST_CREATE= "POST_CREATE";
const POST_REMOVE = "POST_REMOVE";
const POST_EDIT = "POST_EDIT";
const POST_SET_CURRENT_EDIT = "POST_SET_CURRENT_EDIT";

//TODO: Move parts to separate files

// Selectors
/**
 * @returns {[]}
 */
export const getPosts = (state) => state.get("posts");
/**
 * @returns {number}
 */
export const getPlaceholder = (state) => state.get("placeholder");
export const getCurrentlyEditingIndex = (state) => state.get("currentlyEditingIndex");

// Action handlers
export function publishPostAction(index) {
    return {
        type: POST_PUBLISH,
        payload: index,
    };
}
export function publishPost(index) {
    return publishPostAction(index);
}

export function submitEditPostAction(post, index) {
    return {
        type: POST_EDIT,
        payload: { post, index },
    };
}
export function submitEditPost(post, index) {
    return submitEditPostAction(post, index);
}

export function setCurrentlyEditingIndexAction(index) {
    return {
        type: POST_SET_CURRENT_EDIT,
        payload: index,
    };
}
export function setCurrentlyEditingIndex(index) {
    return setCurrentlyEditingIndexAction(index);
}

// Reducer
const initialState = Map({
    posts: List(require("../data/images.json")),
    placeholder: require("../assets/images/placeholder.jpeg"),
    editingIndex: null,
});
export default (state = initialState, action) => {
    switch (action.type) {
        case POST_PUBLISH: {
            return state.set("posts", List([
                ...state.get("posts").slice(0, action.payload),
                ...state.get("posts").slice(action.payload + 1),
            ]));
        }
        case POST_EDIT: {
            return state.set("posts", List([
                ...state.get("posts").slice(0, action.payload.index),
                action.payload.post,
                ...state.get("posts").slice(action.payload.index + 1),
            ]));
        }
        case POST_SET_CURRENT_EDIT: {
            return state.set("currentlyEditingIndex", action.payload);
        }
        default:
            return state;
    }
}
