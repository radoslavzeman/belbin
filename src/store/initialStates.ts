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
export const inputsSliceInitialStatePrefilled: InputsSliceInitialState = {
  inputs: {
    q1a: { value: 4, selected: true }, q1b: { value: 1, selected: true }, q1c: { value: 5, selected: true }, q1d: { value: 0, selected: false }, q1e: { value: 0, selected: false }, q1f: { value: 0, selected: false }, q1g: { value: 0, selected: false }, q1h: { value: 0, selected: false },
    q2a: { value: 0, selected: false }, q2b: { value: 0, selected: false }, q2c: { value: 2, selected: true }, q2d: { value: 6, selected: true }, q2e: { value: 2, selected: true }, q2f: { value: 0, selected: false }, q2g: { value: 0, selected: false }, q2h: { value: 0, selected: false },
    q3a: { value: 3, selected: true }, q3b: { value: 3, selected: true }, q3c: { value: 3, selected: true }, q3d: { value: 1, selected: true }, q3e: { value: 0, selected: false }, q3f: { value: 0, selected: false }, q3g: { value: 0, selected: false }, q3h: { value: 0, selected: false },
    q4a: { value: 0, selected: false }, q4b: { value: 0, selected: false }, q4c: { value: 0, selected: false }, q4d: { value: 0, selected: false }, q4e: { value: 0, selected: false }, q4f: { value: 5, selected: true }, q4g: { value: 5, selected: true }, q4h: { value: 0, selected: false },
    q5a: { value: 0, selected: false }, q5b: { value: 0, selected: false }, q5c: { value: 0, selected: false }, q5d: { value: 0, selected: false }, q5e: { value: 0, selected: false }, q5f: { value: 0, selected: false }, q5g: { value: 3, selected: true }, q5h: { value: 7, selected: true },
    q6a: { value: 0, selected: false }, q6b: { value: 0, selected: false }, q6c: { value: 0, selected: false }, q6d: { value: 0, selected: false }, q6e: { value: 1, selected: true }, q6f: { value: 3, selected: true }, q6g: { value: 3, selected: true }, q6h: { value: 3, selected: true },
    q7a: { value: 0, selected: false }, q7b: { value: 0, selected: false }, q7c: { value: 2, selected: true }, q7d: { value: 2, selected: true }, q7e: { value: 2, selected: true }, q7f: { value: 2, selected: true }, q7g: { value: 2, selected: true }, q7h: { value: 0, selected: false },
  },
  sums: {
    q1: 10, q2: 10, q3: 10, q4: 10, q5: 10, q6: 10, q7: 10,
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
