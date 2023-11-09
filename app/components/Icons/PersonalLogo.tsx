import type { FC } from "react";
import { PiHexagonThin } from "react-icons/pi";

export type PersonalLogoProps = {
    size?: number;
    color?: "cyan" | "white" | "black"
}

export const PersonalLogo: FC<PersonalLogoProps> = ({ size = 100, color = "cyan" }) => {
    const fontSize = size / 4;
    const logoColor = color === "cyan" ? "#008B8B" : color;

    return (
        <div className="flex justify-center items-center bg-transparent" style={{ width: `${size}px`, height: `${size}px` }}>
            <div className="w-full h-full relative z-0">
                <PiHexagonThin size={size} color={logoColor} />
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <p className="font-bold" style={{ color: logoColor, fontSize: fontSize }}>JM</p>
                </div>
            </div>
        </div>
    );
}
