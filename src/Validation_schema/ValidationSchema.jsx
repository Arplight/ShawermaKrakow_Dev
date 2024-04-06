import * as Yup from "yup";

export const FooterSchema = Yup.object().shape({
  subscription_email: Yup.string().email("Invalid email format").trim(),
});

export const contactSchema = Yup.object().shape({
  contact_name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ][\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/gi,
      "Invalid name format."
    )
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters.")
    .required("Name is required."),
  contact_email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required.")
    .trim(),
  contact_subject: Yup.string()
    .trim()
    .matches(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ][\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/gi,
      "Invalid subject format."
    )
    .min(3, "Subject should be at least 3 characters.")
    .max(100, "Subject should not exceed 100 characters.")
    .required("Subject is required."),
  contact_message: Yup.string()
    .required("Please enter your message.")
    .max(1000, "Message should not exceed 1000 characters.")
    .required("Message is required.")
    .trim(),
});

export const trackingSchema = Yup.object().shape({
  checkout_email: Yup.string()
    .email("Invalid email format.")
    .trim()
    .required("Email is required."),
  checkout_token: Yup.string()
    .trim()
    .matches(
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi,
      "Invalid Id Format."
    )
    .required("Id is required."),
});

export const checkoutSchema = Yup.object().shape({
  checkout_email: Yup.string()
    .email("Invalid email format.")
    .trim()
    .required("Email is required."),
  checkout_phone_number: Yup.string().matches(
    /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/g,
    "Invalid phone number."
  ),
  checkout_first_name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ][\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/gi,
      "Invalid name format."
    )
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters.")
    .required("First name is required."),
  checkout_last_name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ][\w\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*$/gi,
      "Invalid name format."
    )
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters.")
    .required("Last name is required."),
  checkout_address: Yup.string()
    .trim()
    .matches(/[\w]/gi, "Invalid address format.")
    .min(10, "Address should be at least 10 characters.")
    .max(100, "Address should not exceed 100 characters.")
    .required("Address is required."),
  checkout_city: Yup.string().required("City is required."),
});
