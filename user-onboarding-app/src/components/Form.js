import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Form = () =>{
    <div className='form-container'>
        <Form>
            <label>
                <Field/>
            </label>
            <label>
                <Field/>
            </label>
            <label>
                <Field/>
            </label>
            <label>
                <Field/>
            </label>
            <label>
                <Field/>
            </label>
        </Form>
    </div>
}

export default Form