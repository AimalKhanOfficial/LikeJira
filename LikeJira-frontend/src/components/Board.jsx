import React, { useEffect, useState } from "react";
import Swimlane from "./SwimLane";
import Header from "./Header";

function Board(props) {
    const [TICKETS_IN_TODO, setTicketsInToDo] = useState([]);
    const [TICKETS_IN_PROGRESS, setTicketsInProgress] = useState([]);
    const [TICKETS_READY_FOR_REVIEW, setTicketsInReadyForReview] = useState([]);
    const [TICKETS_IN_REVIEW, setTicketsInReview] = useState([]);
    const [TICKETS_IN_DONE_OR_REJECTED, setTicketsInDoneOrRejected] = useState([]);

    const setState = (toDo, inProgress, readyForReview, inReview, doneOrRejected) => {
        setTicketsInToDo(toDo);
        setTicketsInProgress(inProgress);
        setTicketsInReadyForReview(readyForReview);
        setTicketsInReview(inReview);
        setTicketsInDoneOrRejected(doneOrRejected);
    }

    const searchAndOrganizePerArray = (tickets, toDo, inProgress, readyForReview, inReview, doneOrRejected) => {
        tickets.forEach(ticket => {
            if (ticket.statusId === 1) {
                toDo.push(ticket);
            } else if (ticket.statusId === 2) {
                inProgress.push(ticket);
            } else if (ticket.statusId === 3) {
                readyForReview.push(ticket);
            } else if (ticket.statusId === 4) {
                inReview.push(ticket);
            } else if (ticket.statusId === 5) {
                doneOrRejected.push(ticket);
            }
        });
    }

    const filterByText = (searchTerm) => {
        if (searchTerm === '') {
            hydrateFromDb();
            return;
        }
        let inProgress = [];
        let toDo = [];
        let readyForReview = [];
        let inReview = [];
        let doneOrRejected = [];
        const searchTickets = [...TICKETS_IN_TODO, ...TICKETS_IN_PROGRESS, ...TICKETS_READY_FOR_REVIEW, ...TICKETS_IN_REVIEW, ...TICKETS_IN_DONE_OR_REJECTED].filter(ticket => ticket.title.toLowerCase().includes(searchTerm.toLowerCase()));
        searchAndOrganizePerArray(searchTickets, toDo, inProgress, readyForReview, inReview, doneOrRejected);
        setState(toDo, inProgress, readyForReview, inReview, doneOrRejected);
    }

    const hydrateFromDb = () => {
        const pushObjToArr = (arr, ticket, epic) => arr.push({
            ...ticket,
            epicName: epic.name,
            epicColorCode: epic.colorCode,
            epicId: epic.epicId
        });
        let inProgress = [];
        let toDo = [];
        let readyForReview = [];
        let inReview = [];
        let doneOrRejected = [];
        props?.boardState.forEach(epic => {
            epic.tickets.forEach(ticket => {
                if (ticket.statusId === 1) {
                    pushObjToArr(toDo, ticket, epic);
                } else if (ticket.statusId === 2) {
                    pushObjToArr(inProgress, ticket, epic);
                } else if (ticket.statusId === 3) {
                    pushObjToArr(readyForReview, ticket, epic);
                } else if (ticket.statusId === 4) {
                    pushObjToArr(inReview, ticket, epic);
                } else if (ticket.statusId === 5) {
                    pushObjToArr(doneOrRejected, ticket, epic);
                }
            });
        });
        setState(toDo, inProgress, readyForReview, inReview, doneOrRejected);
    }

    useEffect(() => {
        hydrateFromDb();
    }, [])

    return (
        <div>
            <Header filterByText={filterByText} />
            <div className="flex justify-around">
                <Swimlane title={'To Do'} tickets={TICKETS_IN_TODO} />
                <Swimlane title={'In Progress'} tickets={TICKETS_IN_PROGRESS} />
                <Swimlane title={'Ready for Review'} tickets={TICKETS_READY_FOR_REVIEW} />
                <Swimlane title={'In Review'} tickets={TICKETS_IN_REVIEW} />
                <Swimlane title={'Done/Rejected'} tickets={TICKETS_IN_DONE_OR_REJECTED} />
            </div>
        </div>
    );
}
export default Board;
