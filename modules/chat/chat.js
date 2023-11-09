import { elementWrapper } from "../../framework/elementWrapper";
import { createInput } from "../../framework/input";
import chatBodyElement from "./chat-body";
import chatInputBox  from "./chat-input";

const chatBodyItems = [
    elementWrapper(
        [ chatBodyElement, chatInputBox ], 
        [ 'm-4' ]
    )
];

const chatBoxClasses = [
    'w-[1024px]',
    'h-[720px]',
    'bg-slate-200',
    'shadow',
    'rounded-[24px]',
    'flex',
    'flex-col',
    'justify-between', 
    'gap-[24px]'

];

export const chatComponent = elementWrapper(
    chatBodyItems,
    chatBoxClasses
)
