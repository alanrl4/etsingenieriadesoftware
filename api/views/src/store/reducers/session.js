import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: null,
};

const slice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		unsetSession: (state) => {
			state.value = null;
		},
		setSession: (state, {payload: {token, nivel}}) => {
			state.value = {token, nivel};
		},
	},
});

export const selectIsLogged = (state) => Boolean(state.session.value);
export const selectLevel = (state) =>
	Boolean(state.session.value ? state.session.value.nivel : -1);
export const {setSession, unsetSession} = slice.actions;
export default slice.reducer;
