import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'

import { changeValue } from '../store/inputsSlice'
import { useAppDispatch, useAppSelector } from '../store/storeHooks'

const useMyForm = () => {
  const dispatch = useAppDispatch()
  const inputs = useAppSelector((state) => state.inputs)

  const [sums, setSums] = useState<{ [index: string]: number }>({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
  })
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
      setResults({
        sh: +inputs.q1f + +inputs.q2e + +inputs.q3c + +inputs.q4b + +inputs.q5d + +inputs.q6g + +inputs.q7a,
        ri: +inputs.q1a + +inputs.q2c + +inputs.q3f + +inputs.q4g + +inputs.q5e + +inputs.q6h + +inputs.q7d,
        co: +inputs.q1d + +inputs.q2b + +inputs.q3a + +inputs.q4h + +inputs.q5f + +inputs.q6c + +inputs.q7g,
        tw: +inputs.q1b + +inputs.q2f + +inputs.q3e + +inputs.q4a + +inputs.q5c + +inputs.q6b + +inputs.q7h,
        im: +inputs.q1g + +inputs.q2a + +inputs.q3h + +inputs.q4d + +inputs.q5b + +inputs.q6f + +inputs.q7e,
        cf: +inputs.q1e + +inputs.q2h + +inputs.q3b + +inputs.q4f + +inputs.q5g + +inputs.q6d + +inputs.q7c,
        pl: +inputs.q1c + +inputs.q2g + +inputs.q3d + +inputs.q4e + +inputs.q5h + +inputs.q6a + +inputs.q7f,
        me: +inputs.q1h + +inputs.q2d + +inputs.q3g + +inputs.q4c + +inputs.q5a + +inputs.q6e + +inputs.q7b,
      })
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
    inputs,
    results,
    sums,
    setSums,
    errors,
  }
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
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
