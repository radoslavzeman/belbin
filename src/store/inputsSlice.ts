/* eslint no-param-reassign: 'off' */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getSums } from '../utils/getSums'
import { inputsSliceInitialState, inputsSliceInitialStatePrefilled, Results } from './initialStates'

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: inputsSliceInitialStatePrefilled,
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
    setResults: {
      reducer(state, action: PayloadAction<{ results: Results }, string>) {
        state.results = action.payload.results
      },
      prepare(payload: { results: Results }) {
        return { payload }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue, toggleInput, setResults } = inputsSlice.actions

export default inputsSlice.reducer
