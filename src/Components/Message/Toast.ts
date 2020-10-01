import { showMessage, hideMessage, MessageType, Position } from "react-native-flash-message";
const ShowMessage = (text: string, type: MessageType, time: number, position: Position) => {
    showMessage({
        message: text,
        type: type,
        duration: time??3000,
        position: position??'top'
    });
}
const HideMessage=()=> {
    hideMessage();
}

export {ShowMessage, HideMessage};