import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// import Field from './Field';

import useUserInfo from '../../hooks/useUserInfo'

import './styles.scss';

const FormikForm = () => {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 400);
  }

  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <TempComp values={values} />

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
