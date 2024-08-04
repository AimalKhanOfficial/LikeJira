import React, { useEffect, useState } from "react";
import Swimlane from "./SwimLane";
import Header from "./Header";
import TicketPopup from "./TicketPopup";
import { getSwimLanesForATeam } from "../dbHanlder";

function Board(props) {
    const [TICKETS_IN_TODO, setTicketsInToDo] = useState([]);
    const [TICKETS_IN_PROGRESS, setTicketsInProgress] = useState([]);
    const [TICKETS_READY_FOR_REVIEW, setTicketsInReadyForReview] = useState([]);
    const [TICKETS_IN_REVIEW, setTicketsInReview] = useState([]);
    const [TICKETS_IN_DONE_OR_REJECTED, setTicketsInDoneOrRejected] = useState([]);
    const [displayPopup, setDisplayPopup] = useState(false);
    const [ticketSelected, setTicketSelected] = useState({});

    const onClickTicket = (ticketDetails) => {
        setTicketSelected(ticketDetails);
        setDisplayPopup(true);
    }

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

    const swimlanesToTicketsMap = {
        1: TICKETS_IN_TODO,
        2: TICKETS_IN_PROGRESS,
        3: TICKETS_READY_FOR_REVIEW,
        4: TICKETS_IN_REVIEW,
        5: TICKETS_IN_DONE_OR_REJECTED
    }

    return (
        <>
            <div>
                <Header filterByText={filterByText} />
                <div className="flex justify-around">
                    {
                        getSwimLanesForATeam('Migration team').swimLanes.filter(swimLane => !swimLane.shouldHide).map(swimLane => {
                            return <Swimlane key={swimLane.id} title={swimLane.name} tickets={swimlanesToTicketsMap[swimLane.id]} onClickTicket={onClickTicket} displayPopup={displayPopup} />
                        })
                    }
                </div>
            </div>
            <div style={{ display: displayPopup ? 'block' : 'none' }}>
                <TicketPopup ticketSelected={ticketSelected} setDisplayPopup={setDisplayPopup} displayPopup={displayPopup} />
            </div>
        </>
    );
}
export default Board;
