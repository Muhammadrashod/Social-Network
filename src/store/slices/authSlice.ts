import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
 user: string  | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
