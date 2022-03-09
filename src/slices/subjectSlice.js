import { createSlice } from '@reduxjs/toolkit'

export const subjectSlice = createSlice({
    name: "subjects",
    initialState: ["Python", "Computer Organisation", "DBMS", "Operating Systems", "Computer Networks", "Data Structures"],
    reducers: {
        addSubject: (state, action) => {
            state.push(action.payload);
        }
    },
})

// get action creator functions
export const { addSubject } = subjectSlice.actions;

// export reducer
export default subjectSlice.reducer;