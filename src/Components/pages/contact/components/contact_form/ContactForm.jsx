import { Form, Formik } from "formik";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import { contactSchema } from "../../../../../Validation_schema/ValidationSchema";
import axios from "axios";
import InputField from "../../../../common/forms/input_field/InputField";
import { IoIosArrowForward } from "react-icons/io";

const ContactForm = () => {
  return (
    <>
      <MainSection
        withBackground={false}
        withStyle={"flex flex-col items-center"}
      >
        <HeroHeadings
          topHeading={"Contact Us"}
          bottomHeading={"Reach Out to Us"}
          isCentered={true}
          withStyle={"mb-3"}
        />
        <Formik
          validationSchema={contactSchema}
          initialValues={{
            contact_name: "",
            contact_email: "",
            contact_subject: "",
            contact_message: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              await axios.post(
                "https://shawermakrakow.com/api/sendemail",
                values
              );
              alert(
                `Thank you ${values.contact_name} for your submission! We'll be in touch soon.`
              );
              resetForm();
            } catch (error) {
              console.error(error, "error");
            }
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col w-full lg:w-1/2 gap-1.5">
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"contact_name"}
                fieldName={"contact_name"}
                fieldPlaceHolder={"Name"}
                fieldMaxLength={21}
              />
              <InputField
                fieldType={"input"}
                inputType={"email"}
                fieldId={"contact_email"}
                fieldName={"contact_email"}
                fieldPlaceHolder={"Email"}
              />
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"contact_subject"}
                fieldName={"contact_subject"}
                fieldPlaceHolder={"Subject"}
                fieldMaxLength={101}
              />
              <InputField
                fieldType={"textArea"}
                fieldId={"contact_message"}
                fieldName={"contact_message"}
                fieldPlaceHolder={"Message"}
                fieldMaxLength={1001}
              />
              <button
                className={`full-button font-secondary ${
                  !isValid || !dirty ? "button-disabled" : ""
                }`}
                type="submit"
                disabled={!isValid || !dirty}
              >
                Send
                <IoIosArrowForward className="text-[20px] button-arrow" />
              </button>
            </Form>
          )}
        </Formik>
      </MainSection>
    </>
  );
};

export default ContactForm;
