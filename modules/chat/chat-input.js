import { elementWrapper } from '../../framework/elementWrapper'
import { createButton } from '../../framework/button'

// chat text input
const $chatInput =  document.createElement('input')
$chatInput.classList = ['text-black', 'bg-slate-50' , 'mt-auto', 'p-4', 'rounded-[8px]', 'border', 'border-slate-200', 'w-full'].join(' ');

// chat text button
const $sendBtn = document.createElement('button');
$sendBtn.classList = ['bg-green-200 text-gray-600'].join(' ')
$sendBtn.innerHTML = 'Send';

// wrapper element
const chatInputBox = document.createElement('div');
chatInputBox.classList =  ['flex', 'flex-row', 'gap-[16px]'].join(' ');

[$chatInput , $sendBtn].map(
    item => { chatInputBox.appendChild(item)}
)

export default chatInputBox ;
