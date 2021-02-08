import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EditMember container
export const initialState: ContainerState = {
  member:'New Member',
};

const editMemberSlice = createSlice({
  name: 'editMember',
  initialState,
  reducers: {
    selectMember(state, action: PayloadAction<any>) {
      state.member = action.payload;
    },
    createMember(state, action: PayloadAction<any>) {
    },
    updateMember(state, action: PayloadAction<any>) {
    },
    deleteMember(state, action: PayloadAction<any>) {
    },
  },
});

export const { actions: editMemberActions, reducer, name: sliceKey } = editMemberSlice;