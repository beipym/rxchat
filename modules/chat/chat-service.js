import { BehaviorSubject } from "rxjs";

export const inputMessage = new BehaviorSubject('');
export const messagesInViewList = new BehaviorSubject([]);

inputMessage.subscribe(
    res => {
        console.log(res);
        messagesInViewList.next(
            [...messagesInViewList.value, res]
        )
    }
)