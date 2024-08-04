export default function Ticket(props) {
    return (
        <div className="flex" onClick={() => {
            props.onClickTicket(props);
        }}>
            <div className="bg-white p-[10px] mt-[10px] m-[5px] shadow-md w-full">
                <div id="ticket-container">
                    <p className="text-[14px] text-gray-600">
                        {props.title}
                    </p>
                </div>
                <div id="ticket-epic-container" className="flex justify-center rounded p-[5px] mt-[5px] w-[22%]"
                    style={{ backgroundColor: props.epicColorCode }}>
                    <p className="uppercase text-[10px] text-gray-600">
                        {props.epicId}
                    </p>
                </div>
                <div id="ticket-number-container" className="mt-[5px]">
                    <p className="uppercase text-[13px] text-gray-600">
                        {props.ticketId}
                    </p>
                </div>
            </div>
        </div>
    );
}