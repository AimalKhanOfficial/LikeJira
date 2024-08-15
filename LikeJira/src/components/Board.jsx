import React, { useEffect, useMemo, useState, useCallback } from "react";
import Swimlane from "./SwimLane";
import Header from "./Header";
import TicketPopup from "./TicketPopup";
import { getSwimLanesForATeam } from "../dbHanlder";
import { searchAndOrganizePerArray, pushObjToArr } from '../utils';
import { useRecoilState, useRecoilValue } from "recoil";
import { popUpStateAtom } from "../store/atoms/popupDisplayAtom";
import { xAtom } from "../store/atoms/xAtom";

function Board(props) {
    console.log(">>> here")
    const teamName = 'Migration team';
    const [TICKETS_IN_TODO, setTicketsInToDo] = useState([]);
    const [TICKETS_IN_PROGRESS, setTicketsInProgress] = useState([]);
    const [TICKETS_READY_FOR_REVIEW, setTicketsInReadyForReview] = useState([]);
    const [TICKETS_IN_REVIEW, setTicketsInReview] = useState([]);
    const [TICKETS_IN_DONE_OR_REJECTED, setTicketsInDoneOrRejected] = useState([]);
    //const xy = useRecoilValue(xAtom);
    const [displayPopup, setDisplayPopup] = useRecoilState(popUpStateAtom);

    //fails here
    //const [yy, setXy] = useRecoilState(xAtom);


    // const onClickTicket = (ticketDetails) => {
    //     setTicketSelected(ticketDetails);
    //     setDisplayPopup(true);
    // }

    const setState = useMemo(() => {
        return (toDo, inProgress, readyForReview, inReview, doneOrRejected) => {
            setTicketsInToDo(toDo);
            setTicketsInProgress(inProgress);
            setTicketsInReadyForReview(readyForReview);
            setTicketsInReview(inReview);
            setTicketsInDoneOrRejected(doneOrRejected);
        }
    }, [TICKETS_IN_TODO, TICKETS_IN_PROGRESS, TICKETS_READY_FOR_REVIEW, TICKETS_IN_REVIEW, TICKETS_IN_DONE_OR_REJECTED]);

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

    const swimlanesToTicketsMap = useMemo(() => ({
        1: TICKETS_IN_TODO,
        2: TICKETS_IN_PROGRESS,
        3: TICKETS_READY_FOR_REVIEW,
        4: TICKETS_IN_REVIEW,
        5: TICKETS_IN_DONE_OR_REJECTED
    }), [TICKETS_IN_TODO, TICKETS_IN_PROGRESS, TICKETS_READY_FOR_REVIEW, TICKETS_IN_REVIEW, TICKETS_IN_DONE_OR_REJECTED]);

    const swimLanesObj = useMemo(() => {
        return getSwimLanesForATeam(teamName).swimLanes.filter(swimLane => !swimLane.shouldHide);
    }, [teamName]);
    return (
        <div>
            <div>
                <Header filterByText={filterByText} teamName={teamName} />
                <div className="flex justify-around">
                    {
                        swimLanesObj.map(swimLane => {
                            return <Swimlane key={swimLane.id} title={swimLane.name} id={swimLane.id} tickets={swimlanesToTicketsMap[swimLane.id]} />
                        })
                    }
                </div>
            </div>
            <div style={{ display: displayPopup ? 'block' : 'none' }}>
                <TicketPopup ticketSelected={{}} setDisplayPopup={setDisplayPopup} displayPopup={displayPopup} />
            </div>
        </div>
    );
}
export default Board;
