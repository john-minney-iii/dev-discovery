"use client"
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useState } from "react";

import OutlineTextInput from "@/components/OutlineTextInput";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";

import nextApiFetcher from "@/src/utils/next-api-fetcher";
import { ContactReq } from "../api/contact/route";

export type ContactFormType = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactPage: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        register,
        reset,
    } = useForm<ContactFormType>({ mode: "onBlur" });

    const onSubmit = async (contactForm: ContactFormType) => {
        setIsLoading(true);
        const contactRequest: ContactReq = { contactForm }

        const contactResponse = await nextApiFetcher({
            url: "/contact",
            method: "POST",
            options: { body: contactRequest }
        });

        if (contactResponse.status === 200) {
            reset();
            setIsLoading(false);
            return;
        }

        // TODO: error toast message
        console.error("Failed Contact Form Submit");
        setIsLoading(false);

        return;
    }

    return (
        <div className="w-full h-[90vh] flex flex-col md:flex-row justify-center items-center gap-x-3 gap-y-10 p-10">
            <div className="max-w-[25rem] flex flex-col gap-y-4">
                <p className="text-4xl md:text-6xl text-cyan">Hey There!</p>
                <p className="text-md md:text-xl">
                    Feel free tofill out the form to send me an email! I&apos;m exited to get in touch!
                </p>
            </div>
            {isLoading ? (
                <div className="w-[20rem] md:w-[30rem] flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="w-[20rem] md:w-[30rem] flex flex-col gap-y-4">
                    <OutlineTextInput
                        type="text"
                        label="Name"
                        required={true}
                        register={{ ...register("name", { required: true }) }}
                    />
                    <OutlineTextInput
                        type="email"
                        label="Email"
                        required={true}
                        register={{ ...register("email", { required: true }) }}
                    />
                    <OutlineTextInput
                        type="text"
                        label="Subject"
                        required={true}
                        register={{ ...register("subject", { required: true }) }}
                    />
                    <OutlineTextInput
                        type="text"
                        style="tall"
                        label="Message"
                        required={true}
                        register={{ ...register("message", { required: true }) }}
                    />
                    <div className="flex flex-row justify-end md:flex-row gap-5">
                        <Button
                            style="outlined"
                            type="button"
                            onClick={() => reset()}
                        >
                            Clear
                        </Button>
                        <Button style="solid" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ContactPage;
