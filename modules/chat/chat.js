import { elementWrapper } from "../../framework/elementWrapper";
import { createInput } from "../../framework/input";
import chatBodyElement from "./chat-body";
import chatInputBoxElement  from "./chat-input";


const chatComponentClasses = [
    'w-[1024px]',
    'h-[720px]',
    'bg-slate-200',
    'shadow',
    'rounded-[24px]',
    'flex',
    'flex-col',
    'justify-between', 
    'gap-[24px]',
    'p-4'
];


const chatComponent = document.createElement('div');

chatComponent.classList = chatComponentClasses.join(' ');

[chatBodyElement , chatInputBoxElement].map(
    item => chatComponent.appendChild(item)
)

export default chatComponent;