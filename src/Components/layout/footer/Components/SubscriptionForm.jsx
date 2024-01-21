import { Formik, Form } from "formik";
import InputField from "../../../common/forms/input_field/InputField";
import { FooterSchema } from "../../../../Validation_schema/ValidationSchema";
import axios from "axios";

const SubscriptionForm = () => {
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
            fieldPlaceHolder={"Enter your email"}
          />
          <button
            className={`dark-button ${
              !isValid || !dirty ? "button-disabled" : ""
            }`}
            type="submit"
            disabled={!isValid || !dirty}
          >
            Subscribe
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SubscriptionForm;
