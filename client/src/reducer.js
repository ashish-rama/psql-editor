export const initialState = {
    user: "Ashish",
    queryRaw: "",
    results: [],
    connectedTables: [],
};

export const actionTypes = {
    SET_USER: "SET_USER",
    UPDATE_QUERY: "UPDATE_QUERY",
    UPDATE_RESULTS: "UPDATE_RESULTS",
    UPDATE_CONNECTED_TABLES: "UPDATE_CONNECTED_TABLES",
};

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionTypes.UPDATE_QUERY:
            return {
                ...state,
                queryRaw: action.queryRaw
            };

        case actionTypes.UPDATE_RESULTS:
            return {
                ...state,
                results: action.results
            }

        case actionTypes.UPDATE_CONNECTED_TABLES:
            return {
                ...state,
                connectedTables: action.connectedTables
            }

        default:
            return state;
    }
};

export default reducer;