import React from 'react';

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  disabled = false,
  className = ''
}) {
  const baseClasses = 'px-4 py-3 rounded font-medium transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
    secondary: 'bg-purple-200 text-purple-800 hover:bg-purple-300 active:bg-purple-400',
    tertiary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;