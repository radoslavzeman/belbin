import { inputsSliceInitialState } from './initialStates'

export const computePartialSum = (idxs: string[], inputs: typeof inputsSliceInitialState.inputs) => {
  let sectionSum = 0
  idxs.forEach((i) => {
    sectionSum += inputs[i].value
  })
  return sectionSum
}

export const getSums = (inputs: typeof inputsSliceInitialState.inputs) => ({
  q1: computePartialSum(['q1a', 'q1b', 'q1c', 'q1d', 'q1e', 'q1f', 'q1g', 'q1h'], inputs),
  q2: computePartialSum(['q2a', 'q2b', 'q2c', 'q2d', 'q2e', 'q2f', 'q2g', 'q2h'], inputs),
  q3: computePartialSum(['q3a', 'q3b', 'q3c', 'q3d', 'q3e', 'q3f', 'q3g', 'q3h'], inputs),
  q4: computePartialSum(['q4a', 'q4b', 'q4c', 'q4d', 'q4e', 'q4f', 'q4g', 'q4h'], inputs),
  q5: computePartialSum(['q5a', 'q5b', 'q5c', 'q5d', 'q5e', 'q5f', 'q5g', 'q5h'], inputs),
  q6: computePartialSum(['q6a', 'q6b', 'q6c', 'q6d', 'q6e', 'q6f', 'q6g', 'q6h'], inputs),
  q7: computePartialSum(['q7a', 'q7b', 'q7c', 'q7d', 'q7e', 'q7f', 'q7g', 'q7h'], inputs),
})

export const getResults = (inputs: typeof inputsSliceInitialState.inputs) => ({
  sh: computePartialSum(['q1f', 'q2e', 'q3c', 'q4b', 'q5d', 'q6g', 'q7a'], inputs),
  ri: computePartialSum(['q1a', 'q2c', 'q3f', 'q4g', 'q5e', 'q6h', 'q7d'], inputs),
  co: computePartialSum(['q1d', 'q2b', 'q3a', 'q4h', 'q5f', 'q6c', 'q7g'], inputs),
  tw: computePartialSum(['q1b', 'q2f', 'q3e', 'q4a', 'q5c', 'q6b', 'q7h'], inputs),
  im: computePartialSum(['q1g', 'q2a', 'q3h', 'q4d', 'q5b', 'q6f', 'q7e'], inputs),
  cf: computePartialSum(['q1e', 'q2h', 'q3b', 'q4f', 'q5g', 'q6d', 'q7c'], inputs),
  pl: computePartialSum(['q1c', 'q2g', 'q3d', 'q4e', 'q5h', 'q6a', 'q7f'], inputs),
  me: computePartialSum(['q1h', 'q2d', 'q3g', 'q4c', 'q5a', 'q6e', 'q7b'], inputs),
})

// export const getSums1 = (inputs: typeof inputsSliceInitialState.inputs) => ({
//   q1: +inputs.q1a + +inputs.q1b + +inputs.q1c + +inputs.q1d + +inputs.q1e + +inputs.q1f + +inputs.q1g + +inputs.q1h,
//   q2: +inputs.q2a + +inputs.q2b + +inputs.q2c + +inputs.q2d + +inputs.q2e + +inputs.q2f + +inputs.q2g + +inputs.q2h,
//   q3: +inputs.q3a + +inputs.q3b + +inputs.q3c + +inputs.q3d + +inputs.q3e + +inputs.q3f + +inputs.q3g + +inputs.q3h,
//   q4: +inputs.q4a + +inputs.q4b + +inputs.q4c + +inputs.q4d + +inputs.q4e + +inputs.q4f + +inputs.q4g + +inputs.q4h,
//   q5: +inputs.q5a + +inputs.q5b + +inputs.q5c + +inputs.q5d + +inputs.q5e + +inputs.q5f + +inputs.q5g + +inputs.q5h,
//   q6: +inputs.q6a + +inputs.q6b + +inputs.q6c + +inputs.q6d + +inputs.q6e + +inputs.q6f + +inputs.q6g + +inputs.q6h,
//   q7: +inputs.q7a + +inputs.q7b + +inputs.q7c + +inputs.q7d + +inputs.q7e + +inputs.q7f + +inputs.q7g + +inputs.q7h,
// })
