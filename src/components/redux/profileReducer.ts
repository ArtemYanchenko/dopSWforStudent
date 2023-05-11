import {ActionsType, PostType, ProfilePageType} from './state';


export const profileReducer = (state: ProfilePageType, action: ActionsType): any => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: new Date().getDate(),
                message: action.payload.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost)
            state.updateText = ''
            break;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.updateText = action.payload.newText;
        }

    }
    return state;
}


export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPostText: postText
        }
    } as const
}


export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}