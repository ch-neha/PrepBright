import { createSlice } from '@reduxjs/toolkit'

const materials = [
    { subject: "Python", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4telIPGlznNHTOIVx9Egg99Ky4qk8W7Td6SutV6MVZcQjJ8HtOZrdj9JSNUJrsn6qw&usqp=CAU" },
    { subject: "Computer Organisation", type: "pdfs", title: "Unit-1", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4telIPGlznNHTOIVx9Egg99Ky4qk8W7Td6SutV6MVZcQjJ8HtOZrdj9JSNUJrsn6qw&usqp=CAU" },
    { subject: "Computer Networks", type: "pdfs", title: "Unit-1", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4telIPGlznNHTOIVx9Egg99Ky4qk8W7Td6SutV6MVZcQjJ8HtOZrdj9JSNUJrsn6qw&usqp=CAU" },
    { subject: "Python", type: "pdfs", title: "Unit-2 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4telIPGlznNHTOIVx9Egg99Ky4qk8W7Td6SutV6MVZcQjJ8HtOZrdj9JSNUJrsn6qw&usqp=CAU" },
    { subject: "DBMS", type: "pdfs", title: "Unit-4,5,6 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4telIPGlznNHTOIVx9Egg99Ky4qk8W7Td6SutV6MVZcQjJ8HtOZrdj9JSNUJrsn6qw&usqp=CAU" },
    { subject: "Data Structures", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XDGDt708watJWnymLj3E3iD2jN0Ib6IsYuTmIYMFFTHTrjG54yx2r6-CxALP9sxexFQ&usqp=CAU" },
    { subject: "Operating Systems", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XDGDt708watJWnymLj3E3iD2jN0Ib6IsYuTmIYMFFTHTrjG54yx2r6-CxALP9sxexFQ&usqp=CAU" },
    { subject: "Python", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XDGDt708watJWnymLj3E3iD2jN0Ib6IsYuTmIYMFFTHTrjG54yx2r6-CxALP9sxexFQ&usqp=CAU" },
    { subject: "DBMS", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XDGDt708watJWnymLj3E3iD2jN0Ib6IsYuTmIYMFFTHTrjG54yx2r6-CxALP9sxexFQ&usqp=CAU" },
    { subject: "Computer Networks", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://smallpdf.com/build/ad192f745313d40d79641d211bb78d52.svg" },
    { subject: "Data Structures", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://smallpdf.com/build/ad192f745313d40d79641d211bb78d52.svg" },
    { subject: "DBms", type: "pdfs", title: "Unit-1 pdf", link: "https://docs.google.com/presentation/d/13ibs8_AEawweHvSom6iGd40bt-k5XPVC/edit#slide=id.p1", imgurl: "https://smallpdf.com/build/ad192f745313d40d79641d211bb78d52.svg" },
];


export const pdfSlice = createSlice({
    name: "pdfs",
    initialState: materials,
    reducers: {
        addpdfs: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addpdfs } = pdfSlice.actions;

export default pdfSlice.reducer;