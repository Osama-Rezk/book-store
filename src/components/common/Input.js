import React from "react";
import { FormFeedback, Label, Input } from "reactstrap";

const TextInput = ({
  field: { name, ...field },
  form: { touched, errors },
  className,
  label,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];

  return (
    <div>
      <Label htmlFor={name} error={error}>
        {label}
      </Label>
      <Input
        invalid={!!(touch && error)}
        id={name}
        className="form-control"
        type="text"
        value={props.value}
        {...field}
        {...props}
      />
      {touch && error && <FormFeedback>{error}</FormFeedback>}
    </div>
  );
};

export default TextInput;
