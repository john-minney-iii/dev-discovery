import type { FC } from "react";
import Link from "next/link";

import { PersonalLogo } from "@/icons";

type NavLinkProps = {
    children: React.ReactNode;
    path: string;
}

const NavLink: FC<NavLinkProps> = ({ children, path }) => {
    return <Link
        href={path}
        className="text-white outline-none underline-offset-4 decoration-cyan hover:underline focus:underline"
        aria-label={`Go to ${children} page`}
    >
        {children}
    </Link>;
}

const Navbar: FC = () => {
    return (
        <div className="w-full flex justify-between items-center py-5 px-10 bg-anthracite">
            <Link href="/">
                <PersonalLogo size={60} />
            </Link>
            <div className="md:flex items-center justify-between gap-x-10 hidden">
                <NavLink path="/resume">Resume</NavLink>
                <NavLink path="/blog">Blog</NavLink>
                <NavLink path="/projects">Projects</NavLink>
                <NavLink path="/experiments">Experiments</NavLink>
                <NavLink path="/contact">Contact</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
