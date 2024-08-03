export default function Ticket(props) {
    return (
        <div className="flex">
            <div className="bg-white p-[10px] mt-[10px] m-[5px] shadow-md w-full">
                <p className="text-[14px] text-gray-600">
                    {props.title}
                </p>
            </div>
        </div>
    );
}