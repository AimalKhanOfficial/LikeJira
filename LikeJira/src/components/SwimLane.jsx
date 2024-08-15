import { memo } from "react";
import Ticket from "./Ticket";
import {useDroppable} from '@dnd-kit/core';

const SwimLane = memo(function Swimlane({ title, tickets, id }) {
    const { isOver, setNodeRef } = useDroppable({
        id
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };
    return (
        <div className="flex" ref={setNodeRef} style={style}>
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