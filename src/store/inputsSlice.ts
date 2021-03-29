/* eslint no-param-reassign: 'off' */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getSums } from './getSums'
import { inputsSliceInitialState } from './initialStates'

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: inputsSliceInitialState,
  reducers: {
    changeValue: {
      reducer(state, action: PayloadAction<{ id: string; value: number }, string>) {
        state.inputs[action.payload.id].value = action.payload.value
        state.sums = getSums(state.inputs)
      },
      prepare(payload: { id: string; value: number }) {
        return { payload }
      },
    },
    toggleInput: {
      reducer(state, action: PayloadAction<{ id: string }, string>) {
        state.inputs[action.payload.id].selected = !state.inputs[action.payload.id].selected
        state.sums = getSums(state.inputs)
      },
      prepare(payload: { id: string }) {
        return { payload }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue, toggleInput } = inputsSlice.actions

export default inputsSlice.reducer
