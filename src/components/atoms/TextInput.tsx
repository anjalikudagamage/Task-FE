import React from "react";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="text-input"
  />
);
