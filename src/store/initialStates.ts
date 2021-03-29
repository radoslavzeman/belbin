export type Results = {
  sh: number
  ri: number
  co: number
  tw: number
  im: number
  cf: number
  pl: number
  me: number
}

type InputsSliceInitialState = {
  inputs: {
    [index: string]: { value: number; selected: boolean }
  }
  sums: {
    [index: string]: number
  }
  results: Results
}

// prettier-ignore
// eslint-disable-next-line import/prefer-default-export
export const inputsSliceInitialState: InputsSliceInitialState = {
  inputs: {
    q1a: { value: 0, selected: false }, q1b: { value: 0, selected: false }, q1c: { value: 0, selected: false }, q1d: { value: 0, selected: false }, q1e: { value: 0, selected: false }, q1f: { value: 0, selected: false }, q1g: { value: 0, selected: false }, q1h: { value: 0, selected: false },
    q2a: { value: 0, selected: false }, q2b: { value: 0, selected: false }, q2c: { value: 0, selected: false }, q2d: { value: 0, selected: false }, q2e: { value: 0, selected: false }, q2f: { value: 0, selected: false }, q2g: { value: 0, selected: false }, q2h: { value: 0, selected: false },
    q3a: { value: 0, selected: false }, q3b: { value: 0, selected: false }, q3c: { value: 0, selected: false }, q3d: { value: 0, selected: false }, q3e: { value: 0, selected: false }, q3f: { value: 0, selected: false }, q3g: { value: 0, selected: false }, q3h: { value: 0, selected: false },
    q4a: { value: 0, selected: false }, q4b: { value: 0, selected: false }, q4c: { value: 0, selected: false }, q4d: { value: 0, selected: false }, q4e: { value: 0, selected: false }, q4f: { value: 0, selected: false }, q4g: { value: 0, selected: false }, q4h: { value: 0, selected: false },
    q5a: { value: 0, selected: false }, q5b: { value: 0, selected: false }, q5c: { value: 0, selected: false }, q5d: { value: 0, selected: false }, q5e: { value: 0, selected: false }, q5f: { value: 0, selected: false }, q5g: { value: 0, selected: false }, q5h: { value: 0, selected: false },
    q6a: { value: 0, selected: false }, q6b: { value: 0, selected: false }, q6c: { value: 0, selected: false }, q6d: { value: 0, selected: false }, q6e: { value: 0, selected: false }, q6f: { value: 0, selected: false }, q6g: { value: 0, selected: false }, q6h: { value: 0, selected: false },
    q7a: { value: 0, selected: false }, q7b: { value: 0, selected: false }, q7c: { value: 0, selected: false }, q7d: { value: 0, selected: false }, q7e: { value: 0, selected: false }, q7f: { value: 0, selected: false }, q7g: { value: 0, selected: false }, q7h: { value: 0, selected: false },
  },
  sums: {
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0,
  },
  results: {
    sh: 0,
    ri: 0,
    co: 0,
    tw: 0,
    im: 0,
    cf: 0,
    pl: 0,
    me: 0,
  }
}

// prettier-ignore
// export const inputsSliceInitialStatePrefilled: InputsSliceInitialState = {
//   inputs: {
//     q1a: 4, q1b: 1, q1c: 5, q1d: 0, q1e: 0, q1f: 0, q1g: 0, q1h: 0,
//     q2a: 0, q2b: 0, q2c: 2, q2d: 6, q2e: 2, q2f: 0, q2g: 0, q2h: 0,
//     q3a: 3, q3b: 3, q3c: 3, q3d: 1, q3e: 0, q3f: 0, q3g: 0, q3h: 0,
//     q4a: 0, q4b: 0, q4c: 0, q4d: 0, q4e: 0, q4f: 5, q4g: 5, q4h: 0,
//     q5a: 0, q5b: 0, q5c: 0, q5d: 0, q5e: 0, q5f: 0, q5g: 3, q5h: 7,
//     q6a: 0, q6b: 0, q6c: 0, q6d: 0, q6e: 1, q6f: 3, q6g: 3, q6h: 3,
//     q7a: 0, q7b: 0, q7c: 2, q7d: 2, q7e: 2, q7f: 2, q7g: 2, q7h: 0,
//   },
//   sums: {
//     q1: 10, q2: 10, q3: 10, q4: 10, q5: 10, q6: 10, q7: 10,
//   }
// }
