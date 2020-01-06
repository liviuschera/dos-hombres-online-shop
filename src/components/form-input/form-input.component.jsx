import React from "react";
import "./form-input.styles.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  // console.log(otherProps);

  return (
    <div className="group">
      <input
        // type="text"
        onChange={handleChange}
        className="form-input"
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
