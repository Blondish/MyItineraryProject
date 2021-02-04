const initState = {
    isLoaded: false
};

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoaded: true
            };
        case "LOADED":
            return {
                ...state,
                isLoaded: false
            };
        default:
            return {
                ...state
            };
    }
};

export default loadingReducer;