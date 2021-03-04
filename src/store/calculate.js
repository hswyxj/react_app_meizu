
const chatReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_CHAT':
            return Object.assign({}, state, {
                chatLog: payload
            });
        case 'CHANGE_STATUS':
            return Object.assign({}, state, {
                statusMessage: payload
            });
        case 'CHANGE_USERNAME':
            return Object.assign({}, state, {
                userName: payload
            });
        default: return state;
    }
}


export { chatReducer }