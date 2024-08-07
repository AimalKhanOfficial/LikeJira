import React from "react";

export default function Header({ filterByText, teamName }) {
    let setTimeOutRef = 0;
    return (
        <div className="p-[10px]">
            <p className="text-xl font-bold">{teamName}</p>
            <div id="header-items-container" className="flex justify-start items-center mt-[5px]">
                <input onChange={(e) => {
                    if (setTimeOutRef) {
                        clearTimeout(setTimeOutRef);
                    }
                    setTimeOutRef = setTimeout(() => {
                        filterByText(e.target.value)
                    }, 300);
                }} className="border border-solid p-[4px] bg-slate-200 w-[30%]" type="text" placeholder={'Search Tickets'} />
                <p className="ml-[25px]">Only my issues</p>
                <p className="ml-[25px]">Recently Updated</p>
            </div>
        </div>
    );
}