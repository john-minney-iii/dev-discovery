import type { FC } from "react";

import OutlinedButton from "./OutlinedButton";
import SolidButton from "./SolidButton";

export type ButtonTypes = "button" | "submit" | "reset" | undefined

export type ButtonProps = {
    children: React.ReactNode;
    style: "outlined" | "solid";
    type: ButtonTypes
    onClick?: () => void;
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, style, type, onClick, disabled = false }) => {
    switch (style) {
        case "outlined":
            return <OutlinedButton type={type} onClick={onClick} disabled={disabled}>{children}</OutlinedButton>
        case "solid":
            return <SolidButton type={type} onClick={onClick} disabled={disabled}>{children}</SolidButton>
        default:
            return <SolidButton type={type} onClick={onClick} disabled={disabled}>{children}</SolidButton>
    }
}

export default Button;
