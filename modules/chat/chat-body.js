import { inputMessage } from "./services/chat-service";

const chatBodyElement = document.createElement('div')
chatBodyElement.classList = ['w-full', 'h-[calc(720px-100px)]', 'rounded-[16px]', 'overflow-y-auto', 'bg-white', 'flex', 'flex-col'].join(' ');

// const messageDate = document.createElement('div');
// messageDate.innerHTML = 'lundi,25 octobre';
// sampleMessage2.classList = ['w-fit', 'm-4','mr-auto', 'p-4', 'text-black', 'bg-slate-200', 'rounded-t-xl', 'rounded-br-xl'].join(' ');
// messageDate.classList = ['w-full', 'text-xs','mr-auto', 'py-2', 'text-slate-400'].join(' ');

inputMessage.subscribe(
    msg => {
        if(msg){
            const sampleMessage = document.createElement('div');
            sampleMessage.innerHTML = msg;
            sampleMessage.classList = ['w-fit', 'm-4', 'ml-auto', 'p-4', 'text-white', 'bg-blue-400', 'rounded-t-xl', 'rounded-bl-xl'].join(' ');
            chatBodyElement.appendChild(sampleMessage);
        }
    }
)


export default chatBodyElement;