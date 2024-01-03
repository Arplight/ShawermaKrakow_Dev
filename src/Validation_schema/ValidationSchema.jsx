import * as Yup from "yup";

export const FooterSchema = Yup.object().shape({
  subscription_mail: Yup.string().email("Invalid email format").trim(),
});
