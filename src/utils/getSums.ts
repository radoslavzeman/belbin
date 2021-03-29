import { inputsSliceInitialState, Results } from '../store/initialStates'

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

export const getResults = (inputs: typeof inputsSliceInitialState.inputs): Results => ({
  sh: computePartialSum(['q1f', 'q2e', 'q3c', 'q4b', 'q5d', 'q6g', 'q7a'], inputs),
  ri: computePartialSum(['q1a', 'q2c', 'q3f', 'q4g', 'q5e', 'q6h', 'q7d'], inputs),
  co: computePartialSum(['q1d', 'q2b', 'q3a', 'q4h', 'q5f', 'q6c', 'q7g'], inputs),
  tw: computePartialSum(['q1b', 'q2f', 'q3e', 'q4a', 'q5c', 'q6b', 'q7h'], inputs),
  im: computePartialSum(['q1g', 'q2a', 'q3h', 'q4d', 'q5b', 'q6f', 'q7e'], inputs),
  cf: computePartialSum(['q1e', 'q2h', 'q3b', 'q4f', 'q5g', 'q6d', 'q7c'], inputs),
  pl: computePartialSum(['q1c', 'q2g', 'q3d', 'q4e', 'q5h', 'q6a', 'q7f'], inputs),
  me: computePartialSum(['q1h', 'q2d', 'q3g', 'q4c', 'q5a', 'q6e', 'q7b'], inputs),
})
