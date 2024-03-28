import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: true,
};

const authSlice = createSlice({
    name: 'authenticated',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
            console.log(state.isAuthenticated);
        },
        logout(state){
            state.isAuthenticated = false;
            console.log(state.isAuthenticated);
        }
    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;