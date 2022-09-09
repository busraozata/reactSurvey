
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import style from "./FormSubvey.module.scss"
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { stepOneValidationSchema, stepTwoValidationSchema, stepThreeValidationSchema, stepLastValidationSchema } from "../../validation";

export default function FormSubvey() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        surname: "",
        question1: "Soru 1",
        answer1: "",
        question2: "Soru 2",
        answer2: "",
        question3: "Soru 3",
        answer3: "",
    })

    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData);

        emailjs.send('service_1ek8mru', 'template_5bn8ofk', formData, 'b_4ujO4HWlQQEYf-d')
            .then((response) => {

                console.log('SUCCESS!', response.status, response.text);

                navigate("/lastpage")

            }, (err) => {
                console.log('FAILED...', err);
                toast.error("Hata !")
            });
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

    const steps = [<StepOne next={handleNextStep} data={data} />, <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />, <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />, <StepLast next={handleNextStep} prev={handlePrevStep} data={data} />]

    console.log("data", data);
    return (
        <div>
            {
                steps[currentStep]
            }
        </div>
    )
}

const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }

    return (
        <div className={`${style.survey} w-100 d-flex justify-content-center align-items-center`}>
            <div className="container ">
                <div className={`${style.formArea} w-100 d-flex justify-content-center align-items-center`}>
                    <Formik
                        initialValues={props.data}
                        onSubmit={handleSubmit}
                        validationSchema={stepOneValidationSchema}
                    >
                        {(formik) => (
                            <Form className={`${style.form} d-flex flex-column justify-content-center`}>

                                <div className="form-group mb-3">
                                    <label htmlFor="name">Ad</label>
                                    <input name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        id='name'
                                    />
                                    <span className='error'><ErrorMessage name='name' /></span>
                                </div>


                                <div className="form-group mb-3">
                                    <label htmlFor="surname">Soyad</label>
                                    <input name="surname"
                                        value={formik.values.surname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        id='surname'
                                    />
                                    <span className='error'><ErrorMessage name='surname' /></span>
                                </div>

                                <div>
                                    <button type='submit' className={`btn ${style.next}`}>Sonraki</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

const StepTwo = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }
    return (
        <div className={`${style.survey} w-100 d-flex justify-content-center align-items-center`}>
            <div className="container">
                <div className={`${style.formArea} w-100 d-flex justify-content-center align-items-center`}>
                    <Formik
                        initialValues={props.data}
                        onSubmit={handleSubmit}
                        validationSchema={stepTwoValidationSchema}
                    >
                        {(formik) => (
                            <Form className={`${style.form} d-flex flex-column justify-content-center`}>

                                <div className="form-group mb-3">
                                    <h5>{formik.values.question1}</h5>
                                    <label htmlFor="answer1">Mesajınız</label>
                                    <textarea name="answer1"
                                        value={formik.values.answer1}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        rows="7"
                                        id='answer1'
                                    ></textarea>
                                    <span className='error'><ErrorMessage name='answer1' /></span>
                                </div>

                                <div>
                                    <button type='button' onClick={() => props.prev(formik.values)} className={`${style.prev} btn`}>Önceki</button>
                                    <button type='submit' className={`btn ${style.next}`}>Sonraki</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

const StepThree = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }
    return (
        <div className={`${style.survey} w-100 d-flex justify-content-center align-items-center`}>
            <div className="container">
                <div className={`${style.formArea} w-100 d-flex justify-content-center align-items-center`}>
                    <Formik
                        initialValues={props.data}
                        onSubmit={handleSubmit}
                        validationSchema={stepThreeValidationSchema}
                    >
                        {(formik) => (
                            <Form className={`${style.form} d-flex flex-column justify-content-center`}>

                                <div className="form-group mb-3">
                                    <h5>{formik.values.question2}</h5>
                                    <label htmlFor="answer2">Mesajınız</label>
                                    <textarea name="answer2"
                                        value={formik.values.answer2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        rows="7"
                                        id='answer2'
                                    ></textarea>
                                    <span className='error'><ErrorMessage name='answer2' /></span>
                                </div>

                                <div>
                                    <button type='button' onClick={() => props.prev(formik.values)} className={`${style.prev} btn`}>Önceki</button>
                                    <button type='submit' className={`btn ${style.next}`}>Sonraki</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

const StepLast = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true)
    }
    return (
        <div className={`${style.survey} w-100 d-flex justify-content-center align-items-center`}>
            <div className="container">
                <div className={`${style.formArea} w-100 d-flex justify-content-center align-items-center`}>
                    <Formik
                        initialValues={props.data}
                        onSubmit={handleSubmit}
                        validationSchema={stepLastValidationSchema}
                    >
                        {(formik) => (
                            <Form className={`${style.form} d-flex flex-column justify-content-center`}>

                                <div className="form-group mb-3">
                                    <h5>{formik.values.question3}</h5>
                                    <label htmlFor="answer3">Mesajınız</label>
                                    <textarea name="answer3"
                                        value={formik.values.answer3}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        rows="7"
                                        id='answer3'
                                    ></textarea>
                                    <span className='error'><ErrorMessage name='answer3' /></span>
                                </div>

                                <div>
                                    <button type='button' onClick={() => props.prev(formik.values)} className={`${style.prev} btn`}>Önceki</button>
                                    <button type='submit' className={`btn ${style.next}`}>Gönder</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <ToastContainer />
                </div>
            </div>
        </div >
    )
}

