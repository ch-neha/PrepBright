import { createSlice } from '@reduxjs/toolkit'

export const subjectSlice = createSlice({
    name: "subjects",
    initialState: ["Python", "Computer Organisation", "DBMS", "Operating Systems", "Computer Networks", "Data Structures"],
})

// export reducer
export default subjectSlice.reducer;