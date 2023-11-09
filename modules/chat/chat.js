import { elementWrapper } from "../../framework/elementWrapper";
import { createInput } from "../../framework/input";
import { chatInputBox } from "./chat-input";

const chatBoxItems = [
    elementWrapper(
        [ chatInputBox ], 
        ['mt-auto', 'm-4']
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
    'justify-between'

];

export const chatBody = elementWrapper(
    chatBoxItems,
    chatBoxClasses
)
