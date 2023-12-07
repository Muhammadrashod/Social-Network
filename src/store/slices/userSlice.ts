import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserSliceState {
  user: IChangeUSerPayload | null;
}

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

interface IChangeUSerPayload {
  useremail: string,
  userpassword: string,
}

const initialState: IUserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<IChangeUSerPayload>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
