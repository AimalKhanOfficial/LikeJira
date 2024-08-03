import React from "react";
import Swimlane from "./SwimLane";

function Board() {
    return (
        <div className="flex justify-center">
            <Swimlane title={'To Do'} tickets={[{ title: 'Write test cases' }]} />
            <Swimlane title={'In Progress'} tickets={[{ title: 'Write test cases' }, { title: 'Write test cases' }, { title: 'Write test cases' }, { title: 'Write test cases' }]} />
            <Swimlane title={'Ready for Validation'} tickets={[{ title: 'Write test cases' }]} />
            <Swimlane title={'Validation'} tickets={[{ title: 'Write test cases' }]} />
            <Swimlane title={'Sign off'} tickets={[{ title: 'Write test cases' }, { title: 'Write test cases' }]} />
            <Swimlane title={'Done/Rejected'} tickets={[{ title: 'Write test cases' }, { title: 'Write test cases' }, { title: 'Write test cases' }]} />
        </div>
    );
}
export default Board;
