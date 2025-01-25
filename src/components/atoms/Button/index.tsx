import React from "react";
import { Tooltip } from "react-tooltip";

// Props type for the Button component
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
    {icon && <span className="icon">{icon}</span>}{" "}
    {/* Render icon if provided */}
    {label} {/* Render button label */}
    {tooltip && <Tooltip content={tooltip} />}{" "}
    {/* Render tooltip if provided */}
  </button>
);
