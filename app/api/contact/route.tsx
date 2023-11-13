import { NextRequest } from "next/server";
import type { ContactFormType } from "@/app/contact/page";

import { createTransport } from "nodemailer";

export type ContactReq = {
    contactForm: ContactFormType;
}

export const POST = async (req: NextRequest) => {
    try {
        const { contactForm } = (await req.json()) as ContactReq;
        const {
            name,
            email,
            subject,
            message
        } = contactForm || ({} as ContactFormType)

        const transporter = createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            },
            secure: true
        });

        const nodemailerOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_TARGET,
            subject: `[CONTACT FORM SUBMISSION] ${subject}`,
            text: `Name: ${name}\n\n From: ${email}\n\n Message:\n ${message}`
        };

        transporter.sendMail(nodemailerOptions, async (error: any) => {
            if (error) {
                return new Response(
                    JSON.stringify({
                        error: true,
                        errorMsg: error.message,
                    }),
                    { status: 500 },
                );
            }
        })

        return new Response(JSON.stringify({ message: "Contact form submited" }), {
            status: 200,
        });

    } catch (error: any) { // TODO: type this
        return new Response(
            JSON.stringify({
                error: true,
                errorMsg: error.message,
            }),
            { status: 500 },
        );
    }
}


