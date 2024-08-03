export default function Ticket({ title, epicId, epicColorCode }) {
    return (
        <div className="flex">
            <div className="bg-white p-[10px] mt-[10px] m-[5px] shadow-md w-full">
                <div id="ticket-container">
                    <p className="text-[14px] text-gray-600">
                        {title}
                    </p>
                </div>
                <div id="ticket-epic-container" className="flex justify-center rounded p-[5px] mt-[5px] w-[22%]"
                    style={{ backgroundColor: epicColorCode }}>
                    <p className="uppercase text-[10px] text-gray-600">
                        {epicId}
                    </p>
                </div>
            </div>
        </div>
    );
}