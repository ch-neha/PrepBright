import { createSlice } from '@reduxjs/toolkit'

const materials = [
    { subject: "Python", type: "videos", title: "Crash Course", link: "https://www.youtube.com/watch?v=j8NnE1YeSN0&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&index=2&t=442s", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01WGYmdZa9GiDuhmraNlY502N6Ck3It1QTg&usqp=CAU" },
    { subject: "Computer Organisation", type: "videos", title: "Computer Architecture", link: "https://www.youtube.com/watch?v=j8NnE1YeSN0&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&index=2&t=442s", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkdqWZMX6gziNFfzRlSe3bgXa1wcP3iBRRA&usqp=CAU" },
    { subject: "Computer Networks", type: "videos", title: "UDP/TCP", link: "https://www.youtube.com/watch?v=j8NnE1YeSN0&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&index=2&t=442s", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGfXBKtmjtqyILLIRuKPgAUcUdLZkBj8o0A&usqp=CAU" },
    { subject: "Python", type: "videos", title: "Tutorial", link: "https://www.youtube.com/watch?v=j8NnE1YeSN0&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&index=2&t=442s", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGfXBKtmjtqyILLIRuKPgAUcUdLZkBj8o0A&usqp=CAU" },
    { subject: "DBMS", type: "videos", title: "Playlist", link: "https://www.youtube.com/watch?v=j8NnE1YeSN0&list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&index=2&t=442s", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "Data Structures", type: "videos", title: "Crash Course", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGfXBKtmjtqyILLIRuKPgAUcUdLZkBj8o0A&usqp=CAU" },
    { subject: "Operating Systems", type: "videos", title: "Unit-1 videos", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "Python", type: "videos", title: "Lists", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "DBMS", type: "videos", title: "SQL", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "Computer Networks", type: "videos", title: "Security", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "Data Structures", type: "videos", title: "Trees/Graphs", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
    { subject: "DBMS", type: "videos", title: "Crash Course", link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinYizxKYH1n-bHrdPN_O47QIl4U-MlHHpRg&usqp=CAU" },
];


export const ytSlice = createSlice({
    name: "videos",
    initialState: materials,
    reducers: {
        addvideos: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addvideos } = ytSlice.actions;

export default ytSlice.reducer;