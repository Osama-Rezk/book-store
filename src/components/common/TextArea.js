import React from "react";

const TextArea = ({
  field: { name, ...field },
  form: { touched, errors },
  className,
  label,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];

  return (
    <textarea
      className="beatiful-text-area"
      invalid={!!(touch && error)}
      id={name}
      rows="8"
      cols="110"
      {...field}
      {...props}
    />
  );
};

export default TextArea;
