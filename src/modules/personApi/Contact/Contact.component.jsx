import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Navbar from '../../common/Navbar';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});

class Contact extends Component {
    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
        //process form submission here
        //done submitting, set submitting to false
        setSubmitting(false);
        return;
    }
    render () {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <h1>Signup</h1>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div
                                    style={{ display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        width: '30%'
                                    }}
                                >
                                    <Field name="firstName" />
                                    {errors.firstName && touched.firstName ? (
                                        <div>{errors.firstName}</div>
                                    ) : null}
                                    <Field name="lastName" />
                                    {errors.lastName && touched.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                    <Field
                                        name="email"
                                        type="email"
                                        style={{ border: '1px solid dodgerblue',
                                            borderTop: '0px',
                                            borderLeft: '0px',
                                            borderRight: '0px'
                                        }}
                                    />
                                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                    <button type="submit">Submit</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
