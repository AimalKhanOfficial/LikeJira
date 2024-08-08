import { createContext } from "react";

const PopupContext = createContext(
    {
        onClickTicket: () => { },
        displayPopup: false
    }
)

export default PopupContext;