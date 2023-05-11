import {ActionsType, MessagesPageType} from './state';


export const dialogsReducer = (state: MessagesPageType, action: ActionsType):MessagesPageType => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.messageText = action.payload.postMessage;
            break;
        case 'SEND_MESSAGE':
            const newMessage = {id: 1, message: state.messageText};
            state.messagesData.push(newMessage);
            state.messageText = '';
            break;
    }
    return state
}


export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (postMessage: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        payload: {
            postMessage
        }
    } as const
}


export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type:'SEND_MESSAGE'
    } as const
}