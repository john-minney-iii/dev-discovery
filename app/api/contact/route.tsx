import { NextRequest } from "next/server";
import type { ContactFormType } from "@/app/contact/page";
import sendGrid from "@sendgrid/mail";

//@ts-ignore
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

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

        const res = await sendGrid.send({
            to: process.env.SENDGRID_TARGET,
            from: process.env.SENDGRID_SENDER_IDENTITY || "",
            subject: `[CONTACT FORM SUBMIT] ${subject}`,
            text: `From: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
        });

        if (res[0].statusCode !== 202) {
            return new Response(JSON.stringify({ message: "Email not sent" }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify({ message: "Contact form submited" }), {
            status: 200,
        });

    } catch (error: any) { // TODO: type this
        console.error(error.message)
        return new Response(
            JSON.stringify({
                error: true,
                errorMsg: error.message,
            }),
            { status: 500 },
        );
    }
}


