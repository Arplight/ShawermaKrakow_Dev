import { Formik, Form } from "formik";
import InputField from "../../../../common/forms/input_field/InputField";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import { IoIosArrowForward } from "react-icons/io";
import { trackingSchema } from "../../../../../Validation_schema/ValidationSchema";
import { useTranslation } from "react-i18next";

const TrackingForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroHeadings
        topHeading={t("orderTracking")}
        bottomHeading={t("submitToTrack")}
        isCentered={true}
        withStyle={"mb-3"}
      />

      <Formik
        validationSchema={trackingSchema}
        initialValues={{ tracking_email: "", tracking_id: "" }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="flex flex-col w-full lg:w-1/2 gap-1.5 m-auto">
            <InputField
              fieldType={"input"}
              inputType={"email"}
              fieldId={"tracking_email"}
              fieldName={"tracking_email"}
              fieldPlaceHolder={t("orderEmail")}
            />
            <InputField
              fieldType={"input"}
              inputType={"text"}
              fieldId={"tracking_id"}
              fieldName={"tracking_id"}
              fieldPlaceHolder={t("orderId")}
              fieldMaxLength={37}
            />
            <button
              className={`full-button font-secondary ${
                !isValid || !dirty ? "button-disabled" : ""
              }`}
              type="submit"
              disabled={!isValid || !dirty}
            >
              {t("submit")}
              <IoIosArrowForward className="text-[20px] button-arrow" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TrackingForm;
