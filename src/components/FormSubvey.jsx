import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function FormSubvey() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        text:""
    })

    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);
    }

    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }))

        if (final) {
            makeRequest(newData)
            return
        }

        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }))
        setCurrentStep((prev) => prev - 1)
    }

    const steps = [<StepOne next={handleNextStep} data={data} />, <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />, <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />]

    console.log("data", data);
    return (
        <div>
            {
                steps[currentStep]
            }
        </div>
    )
}

let stepOneValidationSchema = yup.object().shape({
    first_name: yup.string().required().label("First Name"),
    last_name: yup.string().required().label("Last Name"),

});



const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }

    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={stepOneValidationSchema}
        >
            {() => (
                <Form>
                    <p>First Name</p>
                    <Field name="first_name" />
                    <ErrorMessage name='first_name' />

                    <p>Last Name</p>
                    <Field name="last_name" />
                    <ErrorMessage name='last_name' />

                    <button type='submit'>Next</button>
                </Form>
            )}
        </Formik>
    )
}

let stepTwooValidationSchema = yup.object().shape({
    text: yup.string().required(),
});


const StepTwo = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }

    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            
            validationSchema={stepTwooValidationSchema}
        >
            {(values) => (
                <Form>
                
                    <p>Text</p>
                    <Field name="text" />
                    <ErrorMessage name='text' />

                    <button type='button' onClick={() => props.prev(values)}>Back</button>
                    <button type='submit'>Next</button>
                </Form>
            )}
        </Formik>
    )
}

let stepTwoValidationSchema = yup.object().shape({
    email: yup.string().required().label("Email"),
    password: yup.string().required().label("Password"),

});

const StepThree = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true)
    }
    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={stepTwoValidationSchema}
        >
            {(values) => (
                <Form>
                    <p>Email</p>
                    <Field name="email" />
                    <ErrorMessage name='email' />

                    <p>Password</p>
                    <Field name="password" />
                    <ErrorMessage name='password' />

                    <button type='button' onClick={() => props.prev(values)}>Back</button>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}


