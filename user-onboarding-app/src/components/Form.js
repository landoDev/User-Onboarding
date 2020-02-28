import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin:0 auto;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 5px outset #394A59;
    width: 25%;
    background-color: #000000;

    Form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 5%;
            color: #BC1E22;
            text-shadow: 0 0 3px #FF0000;
            font-size: 1.5rem;
            input{
                margin: 5%;
            }

        }
        p{
            color: #BC1E22;
        }
        button{
            margin: 5% 0;
            width: 50%;
            padding: 4%;
            background-color:#BC1E22;
            color: #FFFFFF;
            text-shadow: 0 0 3px #394A59;
            border: 4px outset #394A59;
        }
    }

`;

const UserForm = ({values, errors, touched, status}) =>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        console.log('A new Inqusitor...', status);
        status && setUsers(users =>[...users, status])
    }, [status])
    return(
        <FormContainer className='form-container'>
            <Form>
                <label htmlFor='name'>Name:
                    <Field id='name' name='name' type='text' placeholder='Name'/>
                </label>
                {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                <label htmlFor='email'>Holo-Mail:
                    <Field id='email' name='email' type='email' placeholder='Valid Holo-Mail'/>
                </label>
                {touched.name && errors.name && <p className='error'>{errors.email}</p>}
                <label htmlFor='password'>Password:
                    <Field id='password' name='password' type='password' placeholder='*****'/>
                </label>
                <label htmlFor='tosCheck'>I am Force-sensitive: 
                    <Field id='tosCheck' className='checkmark' name='tosCheck' type='checkbox' checked={values.tosCheck}/>
                </label>
                <button type='submit'>SURRENDER!</button>
            </Form>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            {users.map(user => {
                return (
                    <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Holo-Mail: {user.email}</li>
                    </ul>
                );
            })
            }
        </FormContainer>
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
        name: Yup.string().required("Name is required Inquisitor."),
        email: Yup.string().required()

    }),
    handleSubmit(values, {setStatus}){
        console.log("surrendering", values)
        axios.post('https://reqres.in/api/users', values)
        .then(response => {
            console.log('Goooood, goooood', response)
            setStatus(response.data)
            
        })
        .catch(error => {
            console.log(error.response)
        })
    }
})(UserForm);

export default FormikUserForm