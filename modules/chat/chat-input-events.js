import { inputMessage } from "./chat-service";

export const sendMessageEvent = () => { alert('Testing this file') }

// chat input send message button click handler
export const sendButtonClickHandler = () => { 
    const inputReference = document.getElementById('chatInputField');
    inputMessage.next(inputReference.value);
    inputReference.value = '';
}