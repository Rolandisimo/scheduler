const POST_PUBLISH = "POST_PUBLISH";
const POST_CREATE= "POST_CREATE";
const POST_REMOVE = "POST_REMOVE";
const POST_EDIT = "POST_EDIT";

export function publishPostAction(index) {
    return {
        type: POST_PUBLISH,
        payload: index,
    };
}
export function publishPost(index) {
    return publishPostAction(index);
}
