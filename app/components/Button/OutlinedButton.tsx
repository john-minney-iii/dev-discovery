import type { FC } from "react";

import type { ButtonTypes } from "./Button";

export type OutlinedButtonProps = {
    children: React.ReactNode;
    type: ButtonTypes
    onClick?: () => void;
    disabled: boolean
}

const OutlinedButton: FC<OutlinedButtonProps> = ({ children, type, onClick, disabled }) => {
    return (
        <button
            type={type}
            className="bg-gainsboro-gray border-2 border-cyan text-cyan p-4 rounded-xl w-24 cursor-pointer hover:border-cyan focus:border-cyan hover:text-cyan focus:text-cyan outline-none"
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    );
}

export default OutlinedButton;
