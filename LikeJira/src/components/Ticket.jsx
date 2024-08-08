import { useContext, memo } from "react";
import PopupContext from "../providers/PopupContext";
const Ticket = memo(({ description, epicColorCode, epicId, epicName, statusId, storyPoints, ticketId, title }) => {
    const { onClickTicket, displayPopup } = useContext(PopupContext);

    return (
        <div className="flex" onClick={() => {
            if (!displayPopup) {
                onClickTicket({ description, epicColorCode, epicId, epicName, statusId, storyPoints, ticketId, title });
            }
        }}>
            <div className="bg-white p-[10px] mt-[10px] m-[5px] shadow-md w-full">
                <div id="ticket-container">
                    <p className="text-[14px] text-gray-600">
                        {title}
                    </p>
                </div>
                <div id="ticket-epic-container" className="flex justify-center rounded p-[5px] mt-[5px] w-[22%]"
                    style={{ backgroundColor: epicColorCode }}>
                    <p className="uppercase text-[10px] text-gray-600">
                        {epicId}
                    </p>
                </div>
                <div id="ticket-number-container" className="mt-[5px]">
                    <p className="uppercase text-[13px] text-gray-600">
                        {ticketId}
                    </p>
                </div>
            </div>
        </div>
    );
});
export default Ticket;