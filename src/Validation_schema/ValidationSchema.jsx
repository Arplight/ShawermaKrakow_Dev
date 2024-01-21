import * as Yup from "yup";

export const FooterSchema = Yup.object().shape({
  subscription_email: Yup.string().email("Invalid email format").trim(),
});

export const contactSchema = Yup.object().shape({
  contact_name: Yup.string()
    .trim()
    .matches(/^[a-zA-Z][\w]*$/gi, "Invalid name format.")
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters."),
  contact_email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required.")
    .trim(),
  contact_subject: Yup.string()
    .trim()
    .matches(/^[a-zA-Z][\w]|[\s]*$/gi, "Invalid subject format.")
    .min(3, "Subject should be at least 3 characters.")
    .max(100, "Subject should not exceed 100 characters.")
    .required("Subject is required."),
  contact_message: Yup.string()
    .required("Please enter your message.")
    .max(1000, "Message should not exceed 1000 characters.")
    .required("Message is required.")
    .trim(),
});
