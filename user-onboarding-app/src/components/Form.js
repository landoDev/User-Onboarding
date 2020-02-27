import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Form = () =>{
    <div className='form-container'>
        <Form>
            <label htmlFor='name'>Name:
                <Field id='name'/>
            </label>
            <label htmlFor='email'>Email:
                <Field id='email'/>
            </label>
            <label htmlFor='password'>Password:
                <Field id='password'/>
            </label>
            <label htmlFor='tosCheck'>I agree with Terms of Service
                <Field id='tosCheck'/>
            </label>
            <button type='submit'>Submit</button>
        </Form>
    </div>
}

const formikForm = withFormik({})(Form);

export default Form