import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {AppContext} from "../../App";
import './Login.css';


const Login = () => {
    const [password, setPassword] = useState('');

    const {
        setIsAuthenticated,
        username,
        setUsername,
        setUserId
    } = useContext(AppContext);

    const initialValues = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('* Please enter a username')
            .max(20, '* Must be a maximum of 20 alphanumeric characters')
            .matches(
                /[A-Za-z0-9]+/,
                "Must be an alphanumeric value"
            ),
        password: Yup.string()
            .required('* Please enter a password')
            .max(20, '* Must be a maximum of 20 alphanumeric characters')
            .matches(
                /[A-Za-z0-9]+/,
                "Must be an alphanumeric value"
            ),
    });

    const handleFormSubmit = (values, props) => {
        // setFirstName(values.firstName);
        // setLastName(values.lastName);
        props.setSubmitting(false);

    }

    return (
        <div className="componentRow">
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
            >
                {(props) => (
                    <Form>
                        <div className="formRow">
                            <Field as={FormControl} variant='outlined'>
                                <Field as={TextField}
                                       required
                                       id="username"
                                       name="username"
                                       label="Username"
                                       placeholder="Username"
                                       helpertext={<ErrorMessage name={username} className="errorMessageText" />}
                                       inputProps={{
                                           maxLength: 20
                                       }}
                                       variant="outlined"
                                />
                            </Field>
                        </div>
                        <div className="formRow">
                            <Field as={FormControl} variant='outlined'>
                                <Field as={TextField}
                                       required
                                       id="password"
                                       name="password"
                                       label="Password"
                                       placeholder="Password"
                                       helpertext={<ErrorMessage name={password} className="errorMessageText" />}
                                       inputProps={{
                                           maxLength: 20
                                       }}
                                       variant="outlined"
                                />
                            </Field>
                        </div>
                        <div className="formRow">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={props.isSubmitting}
                                style={props.isSubmitting? {backgroundColor: '#b1b1b1'} : {backgroundColor: '#00095b'}}
                            >
                                LOGIN
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    );
}

export default Login;
