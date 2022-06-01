import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getSubjects = createAsyncThunk("getsubjects", async (url, thunkApi) => {
    
    try{
        let response = await axios.get(url);
        let subjectsList = response.data;
        console.log("it worked!");
        return subjectsList;
    }
    catch(err) {
        console.log(err);
        thunkApi.rejectWithValue("unable to get data"); // becomes the error message
    }
    
})

export const subjectSlice = createSlice({
    name: "subjects",
    initialState: {
        subjects: [],
        isPending: false,
        isError:false,
        isSuccess:false,
        errMsg:''
    },
    reducers: {},
    extraReducers: {
        [getSubjects.pending]:(state,action)=>{
            state.isPending=true;
            state.isSuccess=false;
            state.isError=false;
            state.errMsg='';
        },
        [getSubjects.fulfilled]:(state,action)=>{
            state.subjects=action.payload;
            state.isPending=false;
            state.isError=false;
            state.isSuccess=true;
            state.errMsg='';
        },
        [getSubjects.rejected]:(state,action)=>{
            state.isError=true;
            state.isPending=false;
            state.isSuccess=false;
            state.errMsg=action.payload.message;
        }
    }
})

// get action creator functions
export const { addSubject } = subjectSlice.actions;

// export reducer
export default subjectSlice.reducer;