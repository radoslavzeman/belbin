import { inputsSliceInitialState } from './initialStates'

// eslint-disable-next-line import/prefer-default-export
export const getSums = (inputs: typeof inputsSliceInitialState.inputs) => ({
  q1: +inputs.q1a + +inputs.q1b + +inputs.q1c + +inputs.q1d + +inputs.q1e + +inputs.q1f + +inputs.q1g + +inputs.q1h,
  q2: +inputs.q2a + +inputs.q2b + +inputs.q2c + +inputs.q2d + +inputs.q2e + +inputs.q2f + +inputs.q2g + +inputs.q2h,
  q3: +inputs.q3a + +inputs.q3b + +inputs.q3c + +inputs.q3d + +inputs.q3e + +inputs.q3f + +inputs.q3g + +inputs.q3h,
  q4: +inputs.q4a + +inputs.q4b + +inputs.q4c + +inputs.q4d + +inputs.q4e + +inputs.q4f + +inputs.q4g + +inputs.q4h,
  q5: +inputs.q5a + +inputs.q5b + +inputs.q5c + +inputs.q5d + +inputs.q5e + +inputs.q5f + +inputs.q5g + +inputs.q5h,
  q6: +inputs.q6a + +inputs.q6b + +inputs.q6c + +inputs.q6d + +inputs.q6e + +inputs.q6f + +inputs.q6g + +inputs.q6h,
  q7: +inputs.q7a + +inputs.q7b + +inputs.q7c + +inputs.q7d + +inputs.q7e + +inputs.q7f + +inputs.q7g + +inputs.q7h,
})
