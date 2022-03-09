import { createSlice } from '@reduxjs/toolkit'

const materials = [
    { subject: "Python", type: "papers", title: "Mid-2 Paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://miro.medium.com/max/640/0*YRnLQLPRJMQh3hu1.jpg" },
    { subject: "Computer Organisation", type: "papers", title: "Mid-1 Question Paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-kSBDhmUK13KQAMRQAhbw86XyyFZ2J--wygAJYCOti-m8nkqxmiErH73vSoBoN634pE&usqp=CAU" },
    { subject: "Computer Networks", type: "papers", title: "Mid-1 Question Paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-kSBDhmUK13KQAMRQAhbw86XyyFZ2J--wygAJYCOti-m8nkqxmiErH73vSoBoN634pE&usqp=CAU" },
    { subject: "Python", type: "papers", title: "Sem paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-kSBDhmUK13KQAMRQAhbw86XyyFZ2J--wygAJYCOti-m8nkqxmiErH73vSoBoN634pE&usqp=CAU" },
    { subject: "DBMS", type: "papers", title: "Sem paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://miro.medium.com/max/640/0*YRnLQLPRJMQh3hu1.jpg" },
    { subject: "Data Structures", type: "papers", title: "Mid-1 Question Paper pdf", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://miro.medium.com/max/640/0*YRnLQLPRJMQh3hu1.jpg" },
    { subject: "Operating Systems", type: "papers", title: "Mid-1 Question Paper pdf", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://miro.medium.com/max/640/0*YRnLQLPRJMQh3hu1.jpg" },
    { subject: "Python", type: "papers", title: "Mid-1 Question Paper ", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ3TQV5yMVN13cDLxkV2SB07j4J0ZJqqR0DqmakgHvBM84RdW3Nb7f8AFwToudM-wpo4&usqp=CAU" },
    { subject: "DBMS", type: "papers", title: "Mid-1 Question Paper", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ3TQV5yMVN13cDLxkV2SB07j4J0ZJqqR0DqmakgHvBM84RdW3Nb7f8AFwToudM-wpo4&usqp=CAU" },
    { subject: "Computer Networks", type: "papers", title: "Mid-1 Question Paper ", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ3TQV5yMVN13cDLxkV2SB07j4J0ZJqqR0DqmakgHvBM84RdW3Nb7f8AFwToudM-wpo4&usqp=CAU" },
    { subject: "Data Structures", type: "papers", title: "Mid-1 Question Paper ", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZ3TQV5yMVN13cDLxkV2SB07j4J0ZJqqR0DqmakgHvBM84RdW3Nb7f8AFwToudM-wpo4&usqp=CAU" },
    { subject: "DBMS", type: "papers", title: "Mid-1 Question Paper pdf", link: "https://docs.google.com/document/d/1_uKH91tU9EjBSif30o3Z2bWaIFtNE0UX/edit", imgurl: "https://miro.medium.com/max/640/0*YRnLQLPRJMQh3hu1.jpg" },
];


export const papersSlice = createSlice({
    name: "papers",
    initialState: materials,
    reducers: {
        addpapers: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addpapers } = papersSlice.actions;

export default papersSlice.reducer;