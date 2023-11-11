import { NextRequest } from "next/server";
import type { ContactFormType } from "@/app/contact/page";

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

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // TODO: hey send the email now

        return new Response(JSON.stringify({ message: "Contact form submited" }), {
            status: 404,
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


