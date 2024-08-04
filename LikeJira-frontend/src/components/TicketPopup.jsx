import React from "react";
import Comment from "./Comment";

export default function TicketPopup({ ticketSelected, setDisplayPopup, displayPopup }) {
    const getTicketStatus = (statusId) => {
        if (statusId === 1) {
            return 'TO DO'
        } else if (statusId === 2) {
            return 'IN PROGRESS';
        } else if (statusId === 3) {
            return 'READY FOR REVIEW';
        } else if (statusId === 4) {
            return 'IN REVIEW';
        } else if (statusId === 5) {
            return 'DONE OR REJECTED';
        }
        else {
            'none'
        }
    };
    return (
        <div className="bg-white border-[1px] border-gray-600 absolute top-[150px] left-0 right-0 mx-auto z-50 h-[500px] w-[1200px]">
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
                    <p className="text-[30px]">
                        {ticketSelected.title}
                    </p>
                    <div className="mt-[15px] w-full">
                        <p className="font-bold">Description</p>
                        <textarea name="ticketDescription" cols="92" rows="5" className="border-2 p-[5px]" value={ticketSelected.description} />
                    </div>
                    <div className="mt-[15px] w-full">
                        <p className="font-bold">Comments</p>
                        {
                            ticketSelected?.comments?.length > 0 ? ticketSelected?.comments?.map(comment => {
                                return <Comment comment={comment}/>
                            }) : <p className="text-[15px] text-gray-500">No comments posted yet.</p>
                        }
                    </div>
                </div>
                <div className="w-[30%]">
                    <div>
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">STATUS</p>
                        <p className="mt-[5px]"><span className="rounded p-[4px] bg-green-500 text-white">{getTicketStatus(ticketSelected.statusId)}</span></p>
                    </div>
                    <div className="mt-[15px]">
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">ASSIGNEE</p>
                        <span className="rounded text-gray-500">None</span>
                    </div>
                    <div className="mt-[15px]">
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">REPORTER</p>
                        <span className="rounded text-gray-500">None</span>
                    </div>
                    <div className="mt-[15px]">
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">LABELS</p>
                        <span className="rounded text-gray-500">None</span>
                    </div>
                    <div className="mt-[15px]">
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">EPIC</p>
                        <span className="rounded text-gray-500 p-[5px]" style={{ backgroundColor: ticketSelected.epicColorCode }}>{ticketSelected.epicName}</span>
                    </div>
                    <div className="mt-[15px]">
                        <p className="font-bold text-[13px] p-[2px] text-gray-500">STORY POINTS</p>
                        <p className="text-white"><span className="rounded p-[3px] bg-gray-400">{ticketSelected.storyPoints}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}