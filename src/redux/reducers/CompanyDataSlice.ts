import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICompanyData, IData } from '../../api';

const initialState: IData<ICompanyData> = {
  companyData: {
    codeTax: 'chp',
    short: 'Адвокат',
    accountType: 'too',
    codeOwnShips: 'adv',
    companyName: '',
    companyTin: '',
    taxTypes: [],
    ownershipTypes: []
  },
  queryError: '',
  isLoadingData: false
};

export const companyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    companyDataFetching (state) {
      state.isLoadingData = true;
    },
    companyDataFetchingSuccess (state, action: PayloadAction<ICompanyData>) {
      state.isLoadingData = false;
      state.queryError = '';
      state.companyData = action.payload;
    },
    companyDataFetchingError (state, action: PayloadAction<string>) {
      state.isLoadingData = false;
      state.queryError = action.payload;
    }
  }
});

export default companyDataSlice.reducer;
