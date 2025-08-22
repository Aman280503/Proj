import React, { useState } from 'react';

function Input({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  validate,
  className = ''
}) {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleBlur = () => {
    setTouched(true);
    if (validate) {
      setError(validate(value));
    }
  };

  const handleChange = (e) => {
    onChange(e);
    if (touched && validate) {
      setError(validate(e.target.value));
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-purple-600 mb-1"
      >
        {label}
        {required && <span className="text-purple-600 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />
      {error && touched && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Input;