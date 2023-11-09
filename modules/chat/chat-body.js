const chatBodyElement = document.createElement('div')
chatBodyElement.classList = ['w-full', 'h-full', 'rounded-[16px]', 'bg-slate-50', 'flex', 'flex-col'].join(' ');

// show messages here 
// generate each message
const sampleMessage = document.createElement('div');
sampleMessage.innerHTML = 'this is a sample message';

const sampleMessage2 = document.createElement('div');
sampleMessage2.innerHTML = 'this is a sample message2';

sampleMessage.classList = ['w-fit', 'm-4', 'ml-auto', 'p-4', 'text-black', 'bg-blue-400', 'rounded-t-xl', 'rounded-bl-xl'].join(' ');
sampleMessage2.classList = ['w-fit', 'm-4','mr-auto', 'p-4', 'text-black', 'bg-green-400', 'rounded-t-xl', 'rounded-br-xl'].join(' ');

chatBodyElement.appendChild(sampleMessage)
chatBodyElement.appendChild(sampleMessage2)

export default chatBodyElement;