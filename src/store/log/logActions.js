import logSlice from "./logSlice"

export const logActions = logSlice.actions;

export const addLog = (data) => {
    return async(dispatch) => {
        dispatch(logActions.addLog(data))
    }
}

export const removeLog = (id) => {
    return async(dispatch) => {
        dispatch(logActions.removeLog(id));
    }
}

export const findLog = (id) => {
    return async(dispatch) => {
        dispatch(logActions.findLog(id));
    }
}

export const updateLog = (data) => {
    return async(dispatch) => {
        dispatch(logActions.updateLog(data));
    }
}