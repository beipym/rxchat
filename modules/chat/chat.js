import { elementWrapper } from "../../framework/elementWrapper";

const chatBoxItems = [
];

const chatBoxClasses = [
    'w-96',
    'h-96',
    'bg-slate-200',
    'shadow',
    'rounded-[24px]',
    'flex',
    'flex-col',
];

export const chatBody = elementWrapper(
    chatBoxItems,
    chatBoxClasses
)
