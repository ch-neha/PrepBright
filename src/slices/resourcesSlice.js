import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getResources = createAsyncThunk("getresources", async (url, thunkApi) => {
    
    try{
        let response = await axios.get(url);
        let resourcesList = response.data;
        console.log("it worked!");
        return resourcesList;
    }
    catch(err) {
        console.log(err);
        thunkApi.rejectWithValue("unable to get data"); // becomes the error message
    }
    
})

export const resourceSlice = createSlice({
    name: "resource",
    initialState : {
        resources: [],
        isPending: false,
        isError: false,
        isSuccess : false,
        errMsg: '',
    },
    reducers :{},
    extraReducers:{
        [getResources.pending] : (state, action) => {
            state.isPending = true;
            state.isError = false;
            state.errMsg = '';
            state.isSuccess = false;
        },
        [getResources.fulfilled] : (state, action) => {
            state.isPending = false;
            state.resources = action.payload; // updates the resources in initialstate
            state.isError = false;
            state.errMsg = '';
            state.isSuccess = true;
        },
        [getResources.rejected] : (state, action) => {
            state.isError = true;
            state.errMsg = action.payload;
            state.isPending = false;
            state.isSuccess = false;
        },
    },
})

export const {} = resourceSlice.actions; 

export default resourceSlice.reducer;