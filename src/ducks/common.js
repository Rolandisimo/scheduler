import { Map, List } from "immutable";

const POST_PUBLISH = "POST_PUBLISH";
const POST_CREATE= "POST_CREATE";
const POST_REMOVE = "POST_REMOVE";
const POST_EDIT = "POST_EDIT";

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

// Reducer
const initialState = Map({
    posts: List(require("../data/images.json")),
    placeholder: require("../assets/images/placeholder.jpeg"),
});
export default (state = initialState, action) => {
    switch (action.type) {
        case POST_PUBLISH:
            return state.set("posts", List([
                ...state.get("posts").slice(0, action.payload),
                ...state.get("posts").slice(action.payload + 1),
            ]));
        default:
            return state
    }
}
