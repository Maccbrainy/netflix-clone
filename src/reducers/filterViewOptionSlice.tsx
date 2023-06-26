import { createSlice } from "@reduxjs/toolkit";
interface FilterState {
    value: string
}
const initialState:FilterState = {
    value: 'default'
}

const filterViewOptionSlice = createSlice({
    name:'filterViewType',
    initialState,
    reducers: {
        filterViewOption: (state, actions) => {
          state.value = actions.payload
        }
    }
})
export const { filterViewOption } = filterViewOptionSlice.actions
export default filterViewOptionSlice.reducer;
