

const reducer = (state, action) => {

    if(state === undefined) return 0;

    switch(action.type) {
        case "NEXT":
            return state + 1;
        case "PREV":
            return state - 1;
        default:
            return state
    }
};

export default reducer