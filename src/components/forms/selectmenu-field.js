import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SelectField = ({label, onChange, error, required, options, value}) => {

    const [fieldValue, setFieldValue] = useState(value);

    let errorClass = error ? 'error': undefined;

    const change = (e) => {
        setFieldValue(e.target.value);
        onChange(e);
        if (required && e.target.value) {
            errorClass = undefined;
        }
    }

    return (<div className="form-field">
        {label && <label>{label}</label>}
        <select onChange={change} className={`form-field-drpdwn ${errorClass}`} value={fieldValue}>
          <option value="-1">Please select...</option>
            {options.length > 0 && 
                options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
    </div>);
};


SelectField.defaultProps = {
    label: undefined,
    onChange: () => undefined,
    error: undefined,
    required: false,
    options: [],
    value: '',
  };
  
  SelectField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    value: PropTypes.string,
};


export default SelectField;