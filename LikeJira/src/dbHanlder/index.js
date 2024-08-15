
import boardStateFromJson from './boardState.json';

const SWIM_LANES = [
    {
        teamName: 'Migration Team',
        swimLanes: [
            {
                id: 1,
                name: 'To Do',
                shouldHide: false
            },
            {
                id: 2,
                name: 'In Progress',
                shouldHide: false
            },
            {
                id: 3,
                name: 'Ready for Review',
                shouldHide: false
            },
            {
                id: 4,
                name: 'In Review',
                shouldHide: false
            },
            {
                id: 5,
                name: 'Done',
                shouldHide: false
            },
            {
                id: 6,
                name: 'Rejected',
                shouldHide: true
            }
        ]
    }
]

let BOARD_STATE = '';

const setBoardState = (boardState) => {
    BOARD_STATE = boardState;
}

setBoardState(boardStateFromJson);

const getLocalBoardState = () => BOARD_STATE;

export const getBoardState = () => getLocalBoardState();
export const getAllSwimLanes = () => SWIM_LANES;
export const getSwimLanesForATeam = (teamName) => SWIM_LANES.find(team => team.teamName.toLowerCase() === teamName.toLowerCase());
export const changeTicketStatusAndReturnNewBoardStatus = (ticketId, statusId) => {
    BOARD_STATE.forEach(epic => {
        let ticketRef = epic.tickets.find(ticket => ticket.ticketId === ticketId);
        if (ticketRef) {
            ticketRef.statusId = statusId;
        }
    });
    return BOARD_STATE;
};