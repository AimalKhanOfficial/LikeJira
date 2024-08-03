import React from "react";
import Swimlane from "./Row";

function Board() {
    return (
        <div className="flex justify-center">
            <Swimlane title={'To Do'} tickets={[{}]}/>
            <Swimlane title={'In Progress'} tickets={[{}, {}, {}, {}]} />
            <Swimlane title={'Ready for Validation'} tickets={[{}]} />
            <Swimlane title={'Validation'} tickets={[{}]} />
            <Swimlane title={'Sign off'} tickets={[{}, {}]} />
            <Swimlane title={'Done/Rejected'} tickets={[{}, {}, {}]} />
        </div>
    );
}
export default Board;
