import { NextRequest } from "next/server";
import type { ContactFormType } from "@/app/contact/page";

import sendEmail, { type SendEmailReturnType } from "@/src/utils/send-email";

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

        const res: SendEmailReturnType = await sendEmail({ name, email, subject, message });

        if (res.status === 500) {
            return new Response(
                JSON.stringify({
                    error: true,
                    errorMsg: res.error,
                }),
                { status: 500 },
            );
        }

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


