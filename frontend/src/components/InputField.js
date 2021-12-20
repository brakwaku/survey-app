import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../utilities/Validator";
import styled from "styled-components";

const InputField = ({
  value,
  label,
  placeholder,
  validators,
  type,
  required,
  onChange,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div>
      {label && <LabelWrapper htmlFor="input-field">{label}</LabelWrapper>}

      {type === "textarea" ? (
        <InputTextAreaWrapper
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <InputWrapper
          type={type}
          value={value}
          placeholder={placeholder}
          required = {required ? required : ''}
          onChange={handleChange}
        />
      )}
      {error && <ErrorMessageWrapper>{error.message}</ErrorMessageWrapper>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validators: PropTypes.array,
  value: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
  value: "",
};

export default InputField;


const LabelWrapper = styled.label`
  display: block;
`;

const InputWrapper = styled.input`
  width: 100%;
  margin: 0 auto 1rem auto;
  border-radius: 5px;
  height: 2.5rem;
`;

const InputTextAreaWrapper = styled.textarea`
  width: 100%;
  margin: 0 auto 1rem auto;
  border-radius: 5px;
`;

const ErrorMessageWrapper = styled.span`
  display: inline-block;
  color: red;
`;
