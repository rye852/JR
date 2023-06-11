import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
// ...

// Define a type for the slice state
interface loadingState {
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: loadingState = {
  isLoading: false,
};

export const loading = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    inLoad(state) {
      state.isLoading = true;
    },
    outLoad(state) {
      state.isLoading = false;
    },
  },
});

export const { inLoad, outLoad } = loading.actions;

export const store = configureStore({
  reducer: {
    loading: loading.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
