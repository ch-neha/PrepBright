import { configureStore } from '@reduxjs/toolkit';
import subjectReducer from './subjectSlice';
import resourcesReducer from './resourcesSlice';

export const store = configureStore({
    reducer: {
        subjects: subjectReducer,
        resources: resourcesReducer,
    }
});