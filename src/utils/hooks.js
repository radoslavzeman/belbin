import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useMyForm = (callback) => {
	const [inputs, setInputs] = useState({
    q1a: 0, q1b: 0, q1c: 0, q1d: 0, q1e: 0, q1f: 0, q1g: 0, q1h: 0,
    q2a: 0, q2b: 0, q2c: 0, q2d: 0, q2e: 0, q2f: 0, q2g: 0, q2h: 0,
    q3a: 0, q3b: 0, q3c: 0, q3d: 0, q3e: 0, q3f: 0, q3g: 0, q3h: 0,
    q4a: 0, q4b: 0, q4c: 0, q4d: 0, q4e: 0, q4f: 0, q4g: 0, q4h: 0,
    q5a: 0, q5b: 0, q5c: 0, q5d: 0, q5e: 0, q5f: 0, q5g: 0, q5h: 0,
    q6a: 0, q6b: 0, q6c: 0, q6d: 0, q6e: 0, q6f: 0, q6g: 0, q6h: 0,
    q7a: 0, q7b: 0, q7c: 0, q7d: 0, q7e: 0, q7f: 0, q7g: 0, q7h: 0,
  });
  const [sums, setSums] = useState({
    q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0,
  });
  const [results, setResults] = useState({});
  const [errors, setErrors] = useState(" ");
	
	const validateSubmit = () => {
      if (
        (sums.q1 !== 10) || (sums.q2 !== 10) || (sums.q3 !== 10) || (sums.q4 !== 10) ||
        (sums.q5 !== 10) || (sums.q6 !== 10) || (sums.q7 !== 10)
      ) {
        setErrors("V každej sekcii treba rozdeliť presne 10 bodov.");
      } else {
        setErrors(undefined);
        // setResults({
        //   sh: +(inputs.q1a) + +(inputs.q1b) + +(inputs.q1c) + +(inputs.q1d) + +(inputs.q1e) + +(inputs.q1f) + +(inputs.q1g) + +(inputs.q1h),
        //   ri: +(inputs.q2a) + +(inputs.q2b) + +(inputs.q2c) + +(inputs.q2d) + +(inputs.q2e) + +(inputs.q2f) + +(inputs.q2g) + +(inputs.q2h),
        // });
        setResults({
          sh: +(inputs.q1f) + +(inputs.q2e) + +(inputs.q3c) + +(inputs.q4b) + +(inputs.q5d) + +(inputs.q6g) + +(inputs.q7a),
          ri: +(inputs.q1a) + +(inputs.q2c) + +(inputs.q3f) + +(inputs.q4g) + +(inputs.q5e) + +(inputs.q6h) + +(inputs.q7d),
          co: +(inputs.q1d) + +(inputs.q2b) + +(inputs.q3a) + +(inputs.q4h) + +(inputs.q5f) + +(inputs.q6c) + +(inputs.q7g),
          tw: +(inputs.q1b) + +(inputs.q2f) + +(inputs.q3e) + +(inputs.q4a) + +(inputs.q5c) + +(inputs.q6b) + +(inputs.q7h),
          im: +(inputs.q1g) + +(inputs.q2a) + +(inputs.q3h) + +(inputs.q4d) + +(inputs.q5b) + +(inputs.q6f) + +(inputs.q7e),
          cf: +(inputs.q1e) + +(inputs.q2h) + +(inputs.q3b) + +(inputs.q4f) + +(inputs.q5g) + +(inputs.q6d) + +(inputs.q7c),
          pl: +(inputs.q1c) + +(inputs.q2g) + +(inputs.q3d) + +(inputs.q4e) + +(inputs.q5h) + +(inputs.q6a) + +(inputs.q7f),
          me: +(inputs.q1h) + +(inputs.q2d) + +(inputs.q3g) + +(inputs.q4c) + +(inputs.q5a) + +(inputs.q6e) + +(inputs.q7b),
        });
      }  
	}

  const handleSubmit = (event) => {
    if (event) {event.preventDefault()}
		return validateSubmit();
  }
  const handleInputChange = (event) => {
    event.persist();
    if (event.target.value < 0) event.target.value = 0;
    if (event.target.value > 10) event.target.value = 10;

    setInputs((inputs) => ({...inputs, [event.target.name]: event.target.value}));

  }
  return {
    handleSubmit,
    handleInputChange,
		inputs,
    results,
    sums, 
    setSums,
    errors,
  };
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
}));

export { useMyForm, useStyles };