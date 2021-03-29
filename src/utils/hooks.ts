import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'

import { getResults } from '../store/getSums'
import { changeValue } from '../store/inputsSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'

const useMyForm = () => {
  const dispatch = useAppDispatch()
  const inputs = useAppSelector((state) => state.inputs.inputs)
  const sums = useAppSelector((state) => state.inputs.sums)

  const [results, setResults] = useState({})
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
      // setResults({
      //   sh: +(inputs.q1a) + +(inputs.q1b) + +(inputs.q1c) + +(inputs.q1d) + +(inputs.q1e) + +(inputs.q1f) + +(inputs.q1g) + +(inputs.q1h),
      //   ri: +(inputs.q2a) + +(inputs.q2b) + +(inputs.q2c) + +(inputs.q2d) + +(inputs.q2e) + +(inputs.q2f) + +(inputs.q2g) + +(inputs.q2h),
      // });
      setResults(getResults(inputs))
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
    results,
    errors,
  }
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    // width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

export { useMyForm, useStyles }
