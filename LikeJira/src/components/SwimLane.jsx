import { memo } from "react";
import Ticket from "./Ticket";

const SwimLane = memo(function Swimlane({title, tickets}) {
    return (
        <div className="flex">
            <div className="h-[800px] w-[320px] max-w-[320px] bg-gray-200 p-[8px]">
                <p className="opacity-[60%] text-gray-60 uppercase text-[12px]">{title} {tickets?.length}</p>
                {
                    tickets?.map((a) => {
                        return <Ticket key={a.ticketId} {...a} />
                    })
                }
            </div>
        </div>
    );
})

export default SwimLane;