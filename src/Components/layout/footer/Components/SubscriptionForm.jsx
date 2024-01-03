import { Formik, Form } from "formik";
import InputField from "../../../common/forms/input_field/InputField";
import { FooterSchema } from "../../../../Validation_schema/ValidationSchema";
const SubscriptionForm = () => {
  return (
    <Formik
      validationSchema={FooterSchema}
      initialValues={{ subscription_mail: "" }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      {({ isValid, dirty }) => (
        <Form className="subscription-form">
          <InputField
            inputType={"email"}
            fieldType={"input"}
            fieldId={"subscription_mail"}
            fieldName={"subscription_mail"}
            fieldPlaceHolder={"Enter your email"}
          />
          <button
            className={`dark-button ${
              !isValid || !dirty ? "button-disabled" : ""
            }`}
            type="submit"
            disabled={!isValid || !dirty}
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SubscriptionForm;
