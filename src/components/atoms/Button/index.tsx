import React from "react";
import { Tooltip } from "react-tooltip"; // Assuming you're using a tooltip library or custom implementation

type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  tooltip?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  tooltip,
}) => (
  <button onClick={onClick} className="button">
    {icon && <span className="icon">{icon}</span>}
    {label}
    {tooltip && <Tooltip content={tooltip} />}
  </button>
);
