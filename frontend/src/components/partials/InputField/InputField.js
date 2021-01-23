import React from "react"
import "./inputField.sass"

export default function InputField({ type, value, error, handleChange, placeholder }) {
  return (
    <div className="w-100">
      <input className={`radius-6 p-5 fs-16 font-primary-regular ${error ? 'has-error' : ''}`} type={type} placeholder={placeholder} value={value} onChange={e => handleChange(e.target.value)} />
      {error && <span className="txt-color-danger-500 fs-12 font-primary-regular">{error}</span>}
    </div>
  )
}

