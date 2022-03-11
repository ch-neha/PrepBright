import { createSlice } from '@reduxjs/toolkit'

const materials = [
    { subject: "Python", type: "impqs", title: "Unit-1 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClN6yws7uaZfcDkma-sNVphAaJZJHt2tTTZe3aQklS0HSkqosS8ZaOZ4nSFZI4ArDHc&usqp=CAU" },
    { subject: "Computer Organisation", type: "impqs", title: "Unit-1", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClN6yws7uaZfcDkma-sNVphAaJZJHt2tTTZe3aQklS0HSkqosS8ZaOZ4nSFZI4ArDHc&usqp=CAU" },
    { subject: "Computer Networks", type: "impqs", title: "Unit-1", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://media.istockphoto.com/photos/inscription-are-you-ready-for-exams-and-stationary-on-grey-background-picture-id1210746752?k=20&m=1210746752&s=612x612&w=0&h=ggtAPQc-zuuOkiEzhaT3SDu2UyY2Iz4BOKTVUuKLfMY=" },
    { subject: "Python", type: "impqs", title: "Unit-2 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://media.istockphoto.com/photos/inscription-are-you-ready-for-exams-and-stationary-on-grey-background-picture-id1210746752?k=20&m=1210746752&s=612x612&w=0&h=ggtAPQc-zuuOkiEzhaT3SDu2UyY2Iz4BOKTVUuKLfMY=" },
    { subject: "DBMS", type: "impqs", title: "Unit-4,5,6 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://media.istockphoto.com/photos/inscription-are-you-ready-for-exams-and-stationary-on-grey-background-picture-id1210746752?k=20&m=1210746752&s=612x612&w=0&h=ggtAPQc-zuuOkiEzhaT3SDu2UyY2Iz4BOKTVUuKLfMY=" },
    { subject: "Data Structures", type: "impqs", title: "Unit-2 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://media.istockphoto.com/photos/inscription-are-you-ready-for-exams-and-stationary-on-grey-background-picture-id1210746752?k=20&m=1210746752&s=612x612&w=0&h=ggtAPQc-zuuOkiEzhaT3SDu2UyY2Iz4BOKTVUuKLfMY=" },
    { subject: "Operating Systems", type: "impqs", title: "Unit-6 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://media.istockphoto.com/photos/inscription-are-you-ready-for-exams-and-stationary-on-grey-background-picture-id1210746752?k=20&m=1210746752&s=612x612&w=0&h=ggtAPQc-zuuOkiEzhaT3SDu2UyY2Iz4BOKTVUuKLfMY=" },
    { subject: "Python", type: "impqs", title: "Unit-1 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-kSBDhmUK13KQAMRQAhbw86XyyFZ2J--wygAJYCOti-m8nkqxmiErH73vSoBoN634pE&usqp=CAU" },
    { subject: "DBMS", type: "impqs", title: "Unit-1 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-kSBDhmUK13KQAMRQAhbw86XyyFZ2J--wygAJYCOti-m8nkqxmiErH73vSoBoN634pE&usqp=CAU" },
    { subject: "Computer Networks", type: "impqs", title: "Unit-4 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClN6yws7uaZfcDkma-sNVphAaJZJHt2tTTZe3aQklS0HSkqosS8ZaOZ4nSFZI4ArDHc&usqp=CAU" },
    { subject: "Data Structures", type: "impqs", title: "Unit-6 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClN6yws7uaZfcDkma-sNVphAaJZJHt2tTTZe3aQklS0HSkqosS8ZaOZ4nSFZI4ArDHc&usqp=CAU" },
    { subject: "DBMS", type: "impqs", title: "Unit-4 imp questions", link: "https://docs.google.com/document/d/1srkYENszQ9zrAFsshEuJe10oQ0pz5Lq__ci7u1qhWc0/edit", imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtClN6yws7uaZfcDkma-sNVphAaJZJHt2tTTZe3aQklS0HSkqosS8ZaOZ4nSFZI4ArDHc&usqp=CAU" },
];


export const impqsSlice = createSlice({
    name: "important questions",
    initialState: materials,
    reducers: {
        addimpqs: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addimpqs } = impqsSlice.actions;

export default impqsSlice.reducer;