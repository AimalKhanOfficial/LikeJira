export const searchAndOrganizePerArray = (tickets, toDo, inProgress, readyForReview, inReview, doneOrRejected) => {
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

export const pushObjToArr = (arr, ticket, epic) => arr.push({
    ...ticket,
    epicName: epic.name,
    epicColorCode: epic.colorCode,
    epicId: epic.epicId
});