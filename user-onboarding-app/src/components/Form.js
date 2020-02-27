import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({values, handleChange}) =>{
    const [user, setUser] = useState([])
    return(
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
                    <Field id='tosCheck' name='tosCheck' type='checkbox' checked={values.tosCheck}/>
                </label>
                <button type='submit'>Submit</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </div>
    )

}

const FormikUserForm = withFormik({

    mapPropsToValues({name, email, password, tosCheck}){
        return {
            name: name || '',
            email: email || '', 
            password: password || '',
            tosCheck: tosCheck || false
        }
    }
})(UserForm);

export default FormikUserForm