import Ticket from "./Ticket";

export default function Swimlane(props) {
    return (
        <div className="flex">
            <div className="h-[800px] w-[320px] max-w-[320px] bg-gray-200 p-[10px]">
                <p className="opacity-[60%] text-gray-60 uppercase text-[12px]">{props.title} {props.tickets?.length}</p>
                {
                    props?.tickets?.map(a => {
                        return <Ticket key={a.ticketId} {...a}/>
                    })
                }
            </div>
        </div>
    );
}