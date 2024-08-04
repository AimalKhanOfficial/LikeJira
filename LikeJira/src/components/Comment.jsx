import React from "react";

export default function Comment(props) {
    return (
        <div className="border-[1px] bg-slate-100 p-[5px] mt-[5px] w-[99%]">
            <div className="flex justify-between text-gray-400 text-[12px]">
                <p className="font-bold">
                    Commented by: {props.comment.commentedBy}
                </p>
                <p className="font-bold">
                    {props.comment.postedDateTime}
                </p>
            </div>
            <div className="p-[5px]">
                <p className="text-[15px]">{props.comment.text}</p>
            </div>
        </div>
    );
}