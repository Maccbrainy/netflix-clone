import { createSlice } from "@reduxjs/toolkit";
interface ScrollState {
    value: boolean
}
const initialState:ScrollState = {
    value: false
}
const changeNavBarBgOnScrollSlice = createSlice({
    name: 'changeNavBarBgOnScroll',
    initialState,
    reducers: {
        changeNavBarBgColor: (state, actions) => {
            state.value = actions.payload
        }
    }
});

const stickySubHeaderToTheTopSlice = createSlice({
    name:'stickySubHeaderToTheTop',
    initialState,
    reducers: {
        stickySubHeader: (state, actions) => {
          state.value = actions.payload
        }
    }
})
export const { changeNavBarBgColor } = changeNavBarBgOnScrollSlice.actions
export const { stickySubHeader } = stickySubHeaderToTheTopSlice.actions
export default changeNavBarBgOnScrollSlice.reducer;
// export default stickySubHeaderToTheTopSlice.reducer;
