import { createTransport } from "nodemailer";

export type SendEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SendEmailReturnType = {
  status: 200 | 500;
  message: string;
  error?: string;
};

const nodemailerSendEmail = ({
  name,
  email,
  subject,
  message,
}: SendEmailProps) => {
  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_TARGET,
    subject: `[CONTACT FROM SUBMISSION] ${subject}`,
    text: `Name: ${name}\n\nFrom: ${email}\n\nMessage:\n${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error: any) => {
      if (error) {
        reject({
          status: 500,
          message: "Failed to send email",
          error: error.message,
        });
      }
      resolve({
        status: 200,
        message: "Email sent",
      });
    });
  });
};

const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: SendEmailProps): Promise<SendEmailReturnType> => {
  try {
    const sendEmailRes = await nodemailerSendEmail({
      name,
      email,
      subject,
      message,
    });

    return sendEmailRes as SendEmailReturnType;
  } catch (error: any) {
    return {
      status: 500,
      message: "Failed to send email",
      error: error?.message,
    };
  }
};

export default sendEmail;
