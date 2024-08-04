import React from "react";

export default function TicketPopup({ ticketSelected, setDisplayPopup, displayPopup }) {
    return (
        <div className="bg-white border-[1px] border-gray-600 absolute top-[150px] left-0 right-0 mx-auto z-50 h-[600px] w-[1200px]">
            <div className="flex justify-between px-[15px] pt-[10px] text-gray-500 text-[13px]">
                <div>
                    <p>
                        {ticketSelected.epicId} / <span className="p-[2px] text-white rounded" style={{ backgroundColor: ticketSelected.epicColorCode }}>✔</span> {ticketSelected.ticketId}
                    </p>
                </div>
                <div>
                    <p onClick={() => {
                        setDisplayPopup(!displayPopup)
                    }}>
                        X
                    </p>
                </div>
            </div>
            <div className="flex p-[10px]">
                <div className="w-[70%]">
                    <p className="text-[20px]">
                        {ticketSelected.title}
                    </p>
                </div>
                <div className="w-[30%]">
                    right panel
                </div>
            </div>
        </div>
    );
}