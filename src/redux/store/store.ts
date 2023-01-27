import { configureStore, combineReducers } from '@reduxjs/toolkit';
import companySlice from '../reducers/CompanySlice';
import modalConfirmSlice from '../reducers/ModalWindowSlice';

const rootReducer = combineReducers({
  companySlice,
  modalConfirmSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
