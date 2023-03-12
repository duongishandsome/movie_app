import { createSlice } from '@reduxjs/toolkit';

export const userSLice = createSlice({
    name: 'User',
    initialState: {
        user: null,
        listFavorites: [],
    },
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                localStorage.removeItem('actkn');
            } else {
                if (action.payload.token) {
                    localStorage.setItem('actkn', action.payload.token);
                }
            }
            state.user = action.payload;
        },
        setListFavorites: (state, action) => {
            state.listFavorites = action.payload;
        },
        removeListFavorites: (state, action) => {
            const { mediaId } = action.payload;
            state.listFavorites = [...state.listFavorites].filter((e) => e.mediaId.toString() !== mediaId.toString());
        },
        addListFavorites: (state, action) => {
            state.listFavorites = [action.payload, ...state.listFavorites];
        },
    },
});

export const { setUser, setListFavorites, removeListFavorites, addListFavorites } = userSLice.actions;

export default userSLice.reducer;
