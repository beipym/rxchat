import { BehaviorSubject } from "rxjs";

export const inputMessage = new BehaviorSubject('');
export const messageSent = new BehaviorSubject(false);

inputMessage.subscribe(

)