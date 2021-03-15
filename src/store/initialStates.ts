// eslint-disable import/prefer-default-export

type InputsSliceInitialState = {
  inputs: {
    [index: string]: number
  }
  sums: {
    [index: string]: number
  }
}

// prettier-ignore
export const inputsSliceInitialState: InputsSliceInitialState = {
  inputs: {
    q1a: 0, q1b: 0, q1c: 0, q1d: 0, q1e: 0, q1f: 0, q1g: 0, q1h: 0,
    q2a: 0, q2b: 0, q2c: 0, q2d: 0, q2e: 0, q2f: 0, q2g: 0, q2h: 0,
    q3a: 0, q3b: 0, q3c: 0, q3d: 0, q3e: 0, q3f: 0, q3g: 0, q3h: 0,
    q4a: 0, q4b: 0, q4c: 0, q4d: 0, q4e: 0, q4f: 0, q4g: 0, q4h: 0,
    q5a: 0, q5b: 0, q5c: 0, q5d: 0, q5e: 0, q5f: 0, q5g: 0, q5h: 0,
    q6a: 0, q6b: 0, q6c: 0, q6d: 0, q6e: 0, q6f: 0, q6g: 0, q6h: 0,
    q7a: 0, q7b: 0, q7c: 0, q7d: 0, q7e: 0, q7f: 0, q7g: 0, q7h: 0,
  },
  sums: {
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0,
  }
}

// prettier-ignore
export const inputsSliceInitialStatePrefilled: InputsSliceInitialState = {
  inputs: {
    q1a: 4, q1b: 1, q1c: 5, q1d: 0, q1e: 0, q1f: 0, q1g: 0, q1h: 0,
    q2a: 0, q2b: 0, q2c: 2, q2d: 6, q2e: 2, q2f: 0, q2g: 0, q2h: 0,
    q3a: 3, q3b: 3, q3c: 3, q3d: 1, q3e: 0, q3f: 0, q3g: 0, q3h: 0,
    q4a: 0, q4b: 0, q4c: 0, q4d: 0, q4e: 0, q4f: 5, q4g: 5, q4h: 0,
    q5a: 0, q5b: 0, q5c: 0, q5d: 0, q5e: 0, q5f: 0, q5g: 3, q5h: 7,
    q6a: 0, q6b: 0, q6c: 0, q6d: 0, q6e: 1, q6f: 3, q6g: 3, q6h: 3,
    q7a: 0, q7b: 0, q7c: 2, q7d: 2, q7e: 2, q7f: 2, q7g: 2, q7h: 0,
  },
  sums: {
    q1: 10, q2: 10, q3: 10, q4: 10, q5: 10, q6: 10, q7: 10,
  }
}
