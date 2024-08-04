import { memo } from "react";
import Ticket from "./Ticket";

const SwimLane = memo(function Swimlane(props) {
    console.log('>> props', props)
    return (
        <div className="flex">
            <div className="h-[800px] w-[320px] max-w-[320px] bg-gray-200 p-[8px]">
                <p className="opacity-[60%] text-gray-60 uppercase text-[12px]">{props.title} {props.tickets?.length}</p>
                {
                    props?.tickets?.map(a => {
                        return <Ticket key={a.ticketId} {...a} onClickTicket={props.onClickTicket} displayPopup={props.displayPopup}/>
                    })
                }
            </div>
        </div>
    );
})

export default SwimLane;