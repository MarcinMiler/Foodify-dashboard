
const initialState = {
    select: 'lastWeek'
}

const settings = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_SELECT':
            return { select: action.select }

        default:
            return state
    }
}

export default settings