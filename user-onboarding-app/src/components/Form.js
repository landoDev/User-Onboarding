import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Form = () =>{
    <div className='form-container'>
        <Form>
            <label htmlFor='name'>Name:
                <Field id='name' name='name' type='text' placeholder='Name'/>
            </label>
            <label htmlFor='email'>Email:
                <Field id='email' name='email' type='email' placeholder='Valid Email'/>
            </label>
            <label htmlFor='password'>Password:
                <Field id='password' name='password' type='password' placeholder='Name'/>
            </label>
            <label htmlFor='tosCheck'>I agree with Terms of Service
                <Field id='tosCheck' name='tosCheck' type='checkbox'/>
            </label>
            <button type='submit'>Submit</button>
        </Form>
    </div>
}

const formikForm = withFormik({
    // mapPropsToValues: (props)=> {
    //     return
    // }
    mapPropsToValues(props){
        return {
            name: props.name || '',
            email: props.email || '', 
            password: props.password || '',
            tosCheck: props.tosCheck || false

        }

        
    }
})(Form);

export default Form