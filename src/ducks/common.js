import { Map, List } from "immutable";

const POST_PUBLISH = "POST_PUBLISH";
const POST_CREATE= "POST_CREATE";
const POST_REMOVE = "POST_REMOVE";
const POST_EDIT = "POST_EDIT";
const MENU_TOGGLE = "MENU_TOGGLE";

//TODO: Move parts to separate files

// Selectors
export const getPosts = (state) => state.get("posts");
export const getPlaceholder = (state) => state.get("placeholder");
export const getMenuState = (state) => state.get("isMenuOpen");

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

export function toggleMenuAction() {
    return { type: MENU_TOGGLE };
}
export function toggleMenu() {
    return toggleMenuAction();
}



// Reducer
const initialState = Map({
    posts: List(require("../data/images.json")),
    placeholder: require("../assets/images/placeholder.jpeg"),
    isMenuOpen: false,
});
export default (state = initialState, action) => {
    switch (action.type) {
        case POST_PUBLISH:
            return state.set("posts", List([
                ...state.get("posts").slice(0, action.payload),
                ...state.get("posts").slice(action.payload + 1),
            ]));
        case MENU_TOGGLE:
            console.log("toggle menu")
            return state.set("isMenuOpen", !state.get("isMenuOpen"));
        default:
            return state
    }
}
