import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const returnIntValue = (data, key) => { // TODO do it better
	return data.hasOwnProperty(key) ? parseInt(data[key]) : 0;
}

const useMyForm = (callback) => {
	const [inputs, setInputs] = useState({
    q1a: 0,
    q1b: 0,
    q1c: 0,
    q1d: 0,
    q1e: 0,
    q1f: 0,
    q1g: 0,
    q1h: 0,
    q2a: 0,
    q2b: 0,
    q2c: 0,
    q2d: 0,
    q2e: 0,
    q2f: 0,
    q2g: 0,
    q2h: 0,
  });
  const [results, setResults] = useState({});

	const r = (key) => { // TODO do it better
		return inputs.hasOwnProperty(key) ? parseInt(inputs[key]) : 0;
	}
	
	const validateSubmit = () => {
		console.log('validating submit');
	// 	if (r('1a') + r('1b') + r('1c') + r('1d') + r('1e') + r('1f') + r('1g') + r('1h') !== 10) {
	// 		return ('not 10');
	// 	} else {
			setResults({
				sh: r('q1a') + r('q1b') + r('q1c') + r('q1d') + r('q1e') + r('q1f') + r('q1g') + r('q1h'),
				ri: r('q2a') + r('q2b') + r('q2c') + r('q2d') + r('q2e') + r('q2f') + r('q2g') + r('q2h'),
			})
		// }

	}

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
		}
		console.log('handling submit')
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
  };
}


// remove
const useOptions = () => {

	const [options, setOptions] = useState({});

	const computeOptions = (formInputs) => {

		const r = (questionId) => { // TODO do it better
			return formInputs.hasOwnProperty(questionId) ? parseInt(formInputs[questionId]) : 0;
		}

		const res = {
			sh: r('1a') + r('2a'),
			ri: r('1b') + r('2b'),
		}

}};


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

export { useMyForm, useStyles, useOptions };