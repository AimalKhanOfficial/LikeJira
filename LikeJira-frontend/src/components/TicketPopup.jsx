import React from "react";

export default function TicketPopup({ ticketSelected, setDisplayPopup, displayPopup }) {
    return (
        <div className="bg-white border border-double absolute top-[150px] left-0 right-0 mx-auto z-50 h-[600px] w-[600px] p-[60px]">
            <p>{ticketSelected.title}</p>
            <input className="rounded bg-slate-500 text-white p-[5px]" type="button" value={'Close'} onClick={() => {
                setDisplayPopup(!displayPopup)
            }}/>
        </div>
    );
}