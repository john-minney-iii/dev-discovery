import type { FC } from "react";

import type { ButtonTypes } from "./Button";

export type SolidButtonProps = {
    children: React.ReactNode;
    type: ButtonTypes
    onClick?: () => void;
    disabled: boolean
}

const SolidButton: FC<SolidButtonProps> = ({ children, type, onClick, disabled }) => {
    return (
        <button
            type={type}
            className="bg-cyan text-gainsboro-gray p-4 rounded-xl w-24 cursor-pointer hover:bg-cyan focus:bg-cyan outline-none"
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    );
}

export default SolidButton;
