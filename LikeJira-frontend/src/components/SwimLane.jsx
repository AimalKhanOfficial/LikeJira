import Ticket from "./Ticket";

export default function Swimlane(props) {
    return (
        <div className="flex p-[10px]">
            <div className="h-[800px] w-[250px] max-w-[300px] bg-gray-300 p-[8px]">
                <p className="opacity-[60%] text-gray-60 uppercase text-[12px]">{props.title} {props.tickets.length}</p>
                {
                    props?.tickets.map(a => {
                        return <Ticket title={a.title}/>
                    })
                }
            </div>
        </div>
    );
}