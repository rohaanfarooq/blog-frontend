import React from "react";
import "../CSS/Login.css";
function InputComponent({ icon, name, type, placeholder, value, onChange }) {
  const mode = localStorage.getItem("thememode");
  return (
    <div
      className={
        mode === "dark" ? "input-field dark-input-field" : "input-field"
      }
    >
      {icon}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputComponent;
