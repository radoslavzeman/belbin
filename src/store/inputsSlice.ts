import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getSums } from './getSums'
import { inputsSliceInitialState, inputsSliceInitialStatePrefilled } from './initialStates'

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: inputsSliceInitialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ id: string; value: number }, string>) {
        // eslint-disable-next-line no-param-reassign
        state.inputs[action.payload.id] = action.payload.value
        // eslint-disable-next-line no-param-reassign
        state.sums = getSums(state.inputs)
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
