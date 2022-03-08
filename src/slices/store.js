import { configureStore } from '@reduxjs/toolkit';
import subjectReducer from './subjectSlice';
import pdfReducer from './pdfSlice';
import videosReducer from './ytSlice';
import impqsReducer from './impqsSlice';
import paperReducer from './papersSlice';

export const store = configureStore({
    reducer: {
        subs: subjectReducer,
        pdfs: pdfReducer,
        videos: videosReducer,
        impqs: impqsReducer,
        papers: paperReducer,
    }
});