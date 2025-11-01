import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import placesReducer from './placesSlice';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: { places: placesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).prepend(epicMiddleware)
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;