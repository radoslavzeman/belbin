import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { inputsSliceInitialState } from './initialStates'

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: inputsSliceInitialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ id: string; value: number }, string>) {
        // eslint-disable-next-line no-param-reassign
        state[action.payload.id] = action.payload.value
      },
      prepare(payload: { id: string; value: number }) {
        return { payload }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue } = inputsSlice.actions

export default inputsSlice.reducer
