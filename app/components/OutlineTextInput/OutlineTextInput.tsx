import type { FC } from "react";
import clsx from "clsx";

export type OutlineTextInputProps = {
    type: string
    style?: "short" | "tall"
    label: string;
    required: boolean
    register: any // TODO: type this with a genric
}

// NOTE: this throws a hydration error if the user has expressVpn
// it addes the little "password" icon to the end of an input
const OutlineTextInput: FC<OutlineTextInputProps> = ({ type, style = "short", label, required, register }) => {
    return (
        <div className={clsx(
            "relative w-full min-w-[200px]",
            {
                "h-12": style === "short",
                "h-24": style === "tall"
            }
        )}>
            <input
                type={type}
                required={required}
                className="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-cyan focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                aria-label={`Input ${label}`}
                {...register}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {label}
            </label>
        </div>
    );
}

export default OutlineTextInput;
