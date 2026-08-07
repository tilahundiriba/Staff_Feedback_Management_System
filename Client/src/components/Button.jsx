import React from 'react'

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-gray-300 bg-white hover:bg-gray-100 text-gray-700",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
