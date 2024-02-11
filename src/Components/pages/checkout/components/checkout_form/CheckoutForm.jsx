import { Formik, Form } from "formik";
import Cities from "../../../../../Data/Cities/Cities.json";
import InputField from "../../../../common/forms/input_field/InputField";
const CheckoutForm = () => {
  const formCities = Cities.map((i) => i.city);
  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-2 py-4">
      <Formik onSubmit={() => {}} initialValues={{}} validationSchema={""}>
        <Form className="flex flex-col gap-2">
          <span className="flex flex-col gap-1 w-full">
            <h3 className="font-primary">Contact</h3>
            <InputField
              fieldType={"input"}
              inputType={"email"}
              fieldId={"checkout_email"}
              fieldName={"checkout_email"}
              fieldPlaceHolder={"Email"}
            />
            <InputField
              fieldType={"input"}
              inputType={"text"}
              fieldId={"checkout_phone"}
              fieldName={"checkout_phone"}
              fieldPlaceHolder={"Mobile phone number"}
            />
          </span>
          <span className="flex flex-col gap-1 w-full">
            <h3 className="font-primary">Delivery</h3>
            <InputField
              fieldType={"select"}
              fieldId={"checkout_city"}
              fieldName={"checkout_city"}
              fieldOptions={[...formCities]}
            />
            <div className="flex flex-col lg:flex-row w-full gap-1">
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"checkout_firstName"}
                fieldName={"checkout_firstName"}
                fieldPlaceHolder={"First name (optional)"}
                fieldStyle={"w-full lg:w-1/2"}
              />
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"checkout_lastName"}
                fieldName={"checkout_lastName"}
                fieldPlaceHolder={"Last name (optional)"}
                fieldStyle={"w-full lg:w-1/2"}
              />
            </div>
            <InputField
              fieldType={"input"}
              inputType={"text"}
              fieldId={"checkout_address"}
              fieldName={"checkout_address"}
              fieldPlaceHolder={"Address"}
            />
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutForm;
