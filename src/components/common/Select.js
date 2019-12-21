import React from "react";

const Select = ({ field: { name, ...field }, ...props }) => {
  return (
    <select className="beatiful-select" id={name} {...field} {...props}>
      {!props.itemSelected && <option value={""}>{props.default}</option>}

      {props.options.map(({ name, value }, i) => (
        <option key={i} selected={props.itemSelected === value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
