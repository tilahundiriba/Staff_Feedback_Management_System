import React from 'react'

function Input({
  label,
  required = false,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="font-medium">

        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}

      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}

export default Input;