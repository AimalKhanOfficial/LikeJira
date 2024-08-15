import { memo } from "react";
import { popUpStateAtom } from "../store/atoms/popupDisplayAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { xAtom } from "../store/atoms/xAtom";
const Ticket = memo(({ description, epicColorCode, epicId, epicName, statusId, storyPoints, ticketId, title }) => {
    const onClickTicket = useSetRecoilState(xAtom);
    const [displayPopup, setDisplayPopup] = useRecoilState(popUpStateAtom);
    return (
        <div className="flex" onClick={() => {
            setDisplayPopup(setDisplayPopup => !setDisplayPopup);
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