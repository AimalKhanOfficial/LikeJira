const BOARD_STATE = [
    {
        name: 'Migration to New TechStack',
        colorCode: '#03b1fc',
        epicId: 'EPIC-1',
        tickets: [
            {
                title: 'Research and Select New TechStack',
                storyPoints: 5,
                ticketId: 'IDB-1',
                statusId: 1
            },
            {
                title: 'Setup Development Environment with New TechStack',
                storyPoints: 8,
                ticketId: 'IDB-2',
                statusId: 3
            },
            {
                title: 'Migrate Existing Codebase to New TechStack',
                storyPoints: 13,
                ticketId: 'IDB-3',
                statusId: 2
            },
            {
                title: 'Test and Validate Migration',
                storyPoints: 8,
                ticketId: 'IDB-4',
                statusId: 5
            }
        ]
    },
    {
        name: 'User Authentication via OAuth',
        colorCode: '#fcba03',
        epicId: 'EPIC-2',
        tickets: [
            {
                title: 'Implement OAuth Login',
                storyPoints: 8,
                ticketId: 'IDB-5',
                statusId: 4
            },
            {
                title: 'Add OAuth Logout Functionality',
                storyPoints: 3,
                ticketId: 'IDB-6',
                statusId: 1
            },
            {
                title: 'Create OAuth Provider Settings Page',
                storyPoints: 5,
                ticketId: 'IDB-7',
                statusId: 5
            }
        ]
    },
    {
        name: 'Database Upgrade to PostgreSQL 13',
        colorCode: '#03f4fc',
        epicId: 'EPIC-3',
        tickets: [
            {
                title: 'Plan and Prepare Database Upgrade',
                storyPoints: 5,
                ticketId: 'IDB-8',
                statusId: 1
            },
            {
                title: 'Execute Database Upgrade',
                storyPoints: 8,
                ticketId: 'IDB-9',
                statusId: 3
            },
            {
                title: 'Verify Data Integrity Post-Upgrade',
                storyPoints: 5,
                ticketId: 'IDB-10',
                statusId: 2
            }
        ]
    },
    {
        name: 'New Homepage Design Integration',
        colorCode: '#27ae60',
        epicId: 'EPIC-4',
        tickets: [
            {
                title: 'Design New Homepage Mockups',
                storyPoints: 8,
                ticketId: 'IDB-11',
                statusId: 4
            },
            {
                title: 'Implement New Homepage Layout',
                storyPoints: 13,
                ticketId: 'IDB-12',
                statusId: 2
            },
            {
                title: 'Test and Optimize Homepage for Performance',
                storyPoints: 5,
                ticketId: 'IDB-13',
                statusId: 5
            }
        ]
    },
    {
        name: 'Beta Testing with Feature Flags',
        colorCode: '#f1c40f',
        epicId: 'EPIC-5',
        tickets: [
            {
                title: 'Setup Feature Flag Management System',
                storyPoints: 8,
                ticketId: 'IDB-14',
                statusId: 3
            },
            {
                title: 'Implement Feature Flags for Beta Features',
                storyPoints: 5,
                ticketId: 'IDB-15',
                statusId: 2
            },
            {
                title: 'Conduct Beta Testing and Gather Feedback',
                storyPoints: 8,
                ticketId: 'IDB-16',
                statusId: 1
            }
        ]
    }
];


export const getBoardState = () => BOARD_STATE;