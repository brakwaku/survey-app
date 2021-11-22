import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  margin: 0 0 1rem 0;
  border-radius: 5px;
  height: 2.5rem;
  width: 100%;
`;

const LabelWrapper = styled.label`
  display: block;
`;

const SelectOption = ({value, data, placeholder, label, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div>
            {label && <LabelWrapper htmlFor="input-field">{label}</LabelWrapper>}
            <SelectWrapper
                value={value}
                onChange={handleChange}>
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option key={key} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </SelectWrapper>
        </div>
    )
};

SelectOption.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

SelectOption.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: ''
};

export default SelectOption;