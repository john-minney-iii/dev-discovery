import type { FC } from "react";

const Footer: FC = () => {
    return (
        <div className="w-full h-[100px] flex items-center justify-between py-5 px-10 bg-anthracite text-white">
            <p>John Minney III</p>
            <p>Made with 💜 with Next.Js</p>
        </div>
    );
}

export default Footer;
