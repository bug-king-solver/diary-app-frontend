import authSlice from "./authSlice";

export const authActions = authSlice.actions;

export const login = (credintials) => {
    return async(dispatch) => {
        dispatch(authActions.login(credintials))
    }
}

export const register = (data) => {
    return async(dispatch) => {
        dispatch(authActions.register(data))
    }
}