import { Formik, Form } from "formik";
import InputField from "../../../common/forms/input_field/InputField";
import { FooterSchema } from "../../../../Validation_schema/ValidationSchema";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SubscriptionForm = () => {
  const { t } = useTranslation();
  return (
    <Formik
      validationSchema={FooterSchema}
      initialValues={{ subscription_email: "" }}
      onSubmit={async (values, { resetForm }) => {
        try {
          await axios.post(
            "https://shawermakrakow.com/api/subscription/store",
            values
          );
          alert("Thankyou, you are subscribed to receive our daily newsletter");
          resetForm();
        } catch (error) {
          console.error(error, "error");
        }
      }}
    >
      {({ isValid, dirty }) => (
        <Form className="subscription-form w-full lg:w-3/5 ">
          <InputField
            inputType={"email"}
            fieldType={"input"}
            fieldId={"subscription_email"}
            fieldName={"subscription_email"}
            fieldPlaceHolder={t("enterYourEmail")}
          />
          <button
            className={`dark-button ${
              !isValid || !dirty ? "button-disabled" : ""
            }`}
            type="submit"
            disabled={!isValid || !dirty}
          >
            {t("subscribe")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SubscriptionForm;
