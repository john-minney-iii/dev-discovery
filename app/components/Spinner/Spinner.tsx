import type { FC } from "react";
import "@/styles/spinner.css";

export type SpinnerProps = {
    size?: number;
    message?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = 86, message }) => {
    return (
        <>
            {message ? <p>{message}</p> : null}
            <span className="loader" style={{ width: `${size}px`, height: `${size}px` }}></span>
        </>
    );
}

export default Spinner;
