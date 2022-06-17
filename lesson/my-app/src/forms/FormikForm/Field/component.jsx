import React from "react";

const Field = ({
  type,
  name,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => (
  <>
    <input
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
    />
    {errors[name] && touched[name] && errors[name]}
  </>
)

export default Field;
