import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({values, errors, touched, status}) =>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        console.log('status has changed', status);
        status && setUsers(users =>[...users, status])
    }, [status])
    return(
        <div className='form-container'>
            <Form>
                <label htmlFor='name'>Name:
                    <Field id='name' name='name' type='text' placeholder='Name'/>
                </label>
                {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                <label htmlFor='email'>Email:
                    <Field id='email' name='email' type='email' placeholder='Valid Email'/>
                </label>
                {touched.name && errors.name && <p className='error'>{errors.email}</p>}
                <label htmlFor='password'>Password:
                    <Field id='password' name='password' type='password' placeholder='Name'/>
                </label>
                <label htmlFor='tosCheck'>Join or Die: 
                    <Field id='tosCheck' name='tosCheck' type='checkbox' checked={values.tosCheck}/>
                </label>
                <button type='submit'>Submit</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            {users.map(user => {
                return (
                    <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    </ul>
                );
            })
            }
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
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required, must be letters."),
        email: Yup.string().required()

    }),
    handleSubmit(values, {setStatus}){
        console.log("submitting", values)
        axios.post('https://reqres.in/api/users', values)
        .then(response => {
            console.log('success', response)
            setStatus(response.data)
            
        })
        .catch(error => {
            console.log(error.response)
        })
    }
})(UserForm);

export default FormikUserForm