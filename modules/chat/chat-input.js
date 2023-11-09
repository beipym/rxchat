import { createInput } from '../../framework/input'
import { customElement } from '../../framework/customElement'
import { elementWrapper } from '../../framework/elementWrapper'
import { createButton } from '../../framework/button'

const chatInput =  createInput(['bg-slate-50' , 'mt-auto', 'p-4', 'rounded-[8px]', 'border', 'border-slate-200', 'w-full']) 


const sendBtn = createButton( ['bg-green-200 text-gray-600'], 'Send')

export const chatInputBox = elementWrapper([chatInput, sendBtn] , ['flex', 'flex-row', 'gap-[16px]']);

