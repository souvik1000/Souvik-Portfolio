import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export type formikFields =
  | "from_name"
  | "to_name"
  | "subject"
  | "reply_to"
  | "message";

export type EmailJSResponse = EmailJSResponseStatus;

export namespace GET {
  interface IParams {
    serviceId: string;
    templateId: string;
    userId: string;
    formElement: HTMLFormElement | string | null;
  }

  export const service = (params: IParams) => {
    const { serviceId, templateId, userId, formElement } = params;

    return emailjs.sendForm(serviceId, templateId, formElement!, userId);
  };
}
