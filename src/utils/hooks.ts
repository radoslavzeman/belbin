import { useState } from 'react'

import { changeValue, setResults } from '../store/inputsSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'
import { getResults } from './getSums'

const useMyForm = () => {
  const dispatch = useAppDispatch()
  const inputs = useAppSelector((state) => state.inputs.inputs)
  const sums = useAppSelector((state) => state.inputs.sums)

  const [errors, setErrors] = useState(' ')

  const validateSubmit = () => {
    console.log('from validateSubmit:', sums)
    if (
      sums.q1 !== 10 ||
      sums.q2 !== 10 ||
      sums.q3 !== 10 ||
      sums.q4 !== 10 ||
      sums.q5 !== 10 ||
      sums.q6 !== 10 ||
      sums.q7 !== 10
    ) {
      setErrors('V každej sekcii treba rozdeliť presne 10 bodov.')
    } else {
      setErrors('')
      dispatch(setResults({ results: getResults(inputs) }))
    }
  }

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault()
    }
    return validateSubmit()
  }
  const handleInputChange = (event: any) => {
    event.persist()

    // eslint-disable-next-line prefer-const
    let { name, value } = event.target
    if (value < 0) value = 0
    if (value > 10) value = 10
    if (value === '') value = 0

    dispatch(changeValue({ id: name, value: parseInt(value, 10) }))
  }
  return {
    handleSubmit,
    handleInputChange,
    errors,
  }
}
// eslint-disable-next-line import/prefer-default-export
export { useMyForm }
