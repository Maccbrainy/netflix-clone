import { createSlice } from "@reduxjs/toolkit";
interface ScrollState {
    value: boolean
}
const initialState:ScrollState = {
    value: false
}

const stickySubHeaderToTheTopSlice = createSlice({
    name:'stickySubHeaderToTheTop',
    initialState,
    reducers: {
        stickySubHeader: (state, actions) => {
          state.value = actions.payload
        }
    }
})
export const { stickySubHeader } = stickySubHeaderToTheTopSlice.actions
export default stickySubHeaderToTheTopSlice.reducer;
