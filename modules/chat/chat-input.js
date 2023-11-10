import { sendButtonClickHandler } from "./chat-input-events";

// chat text input
const $chatInput =  document.createElement('input')
$chatInput.classList = ['text-black', 'bg-white' , 'mt-auto', 'p-4', 'rounded-[8px]', 'border', 'border-slate-200', 'w-full'].join(' ');
$chatInput.setAttribute('id', 'chatInputField');
// $chatInput.addEventListener('keyup', ()=>{console.log($chatInput.value)})

// chat text button
const $sendBtn = document.createElement('button');
$sendBtn.classList = ['bg-green-400', 'text-white', 'shadow', 'hover:bg-green-500'].join(' ')
$sendBtn.innerHTML = 'Send';
$sendBtn.id = 'sendMsgBtn';

$sendBtn.addEventListener('click', sendButtonClickHandler)

// wrapper element
const chatInputBoxElement = document.createElement('div');
chatInputBoxElement.classList =  ['flex', 'flex-row', 'gap-[16px]'].join(' ');

[$chatInput , $sendBtn].map(
    item => { chatInputBoxElement.appendChild(item)}
)

export default chatInputBoxElement ;
