import { Formik, Form } from "formik";
import Cities from "../../../../../Data/Cities/Cities.json";
import InputField from "../../../../common/forms/input_field/InputField";
import { useState } from "react";
import { checkoutSchema } from "../../../../../Validation_schema/ValidationSchema";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const formCities = Cities.map((i) => i.city);
  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-2 py-4">
      <Formik
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          resetForm();
        }}
        initialValues={{
          checkout_email: "",
          checkout_phone_number: "",
          checkout_first_name: "",
          checkout_last_name: "",
          checkout_address: "",
          checkout_payment_method: paymentMethod,
        }}
        validationSchema={checkoutSchema}
      >
        {({ isValid, dirty, setFieldValue }) => (
          <Form className="flex flex-col gap-2">
            <span className="flex flex-col gap-1 w-full">
              <h3 className="font-primary">Contact</h3>
              <InputField
                fieldType={"input"}
                inputType={"email"}
                fieldId={"checkout_email"}
                fieldName={"checkout_email"}
                fieldPlaceHolder={"Email"}
                fieldMaxLength={100}
              />
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"checkout_phone_number"}
                fieldName={"checkout_phone_number"}
                fieldPlaceHolder={"Mobile phone number (optional)"}
                fieldMaxLength={16}
              />
            </span>
            <span className="flex flex-col gap-1 w-full">
              <h3 className="font-primary">Delivery</h3>
              <InputField
                fieldType={"select"}
                fieldId={"checkout_city"}
                fieldName={"checkout_city"}
                fieldOptions={[...formCities]}
                fieldLabel={"City"}
              />
              <div className="flex flex-col lg:flex-row w-full gap-1">
                <InputField
                  fieldType={"input"}
                  inputType={"text"}
                  fieldId={"checkout_first_name"}
                  fieldName={"checkout_first_name"}
                  fieldPlaceHolder={"First name "}
                  fieldStyle={"w-full lg:w-1/2"}
                  fieldMaxLength={21}
                />
                <InputField
                  fieldType={"input"}
                  inputType={"text"}
                  fieldId={"checkout_last_name"}
                  fieldName={"checkout_last_name"}
                  fieldPlaceHolder={"Last name "}
                  fieldStyle={"w-full lg:w-1/2"}
                  fieldMaxLength={21}
                />
              </div>
              <InputField
                fieldType={"input"}
                inputType={"text"}
                fieldId={"checkout_address"}
                fieldName={"checkout_address"}
                fieldPlaceHolder={"Address"}
                fieldMaxLength={101}
              />
            </span>
            <span className="flex flex-col gap-1 w-full">
              <h3 className="font-primary">Payment</h3>
              <label
                htmlFor="checkout_payment_method"
                className="flex gap-0.5 items-center"
              >
                <input
                  type="checkbox"
                  id="checkout_payment_method"
                  name="checkout_payment_method"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => {
                    const newPaymentMethod = e.target.checked ? "cash" : "card";
                    setPaymentMethod(newPaymentMethod);
                    setFieldValue("checkout_payment_method", newPaymentMethod);
                  }}
                />
                <p className="small-paragrapgh font-primary">Cash payment</p>
              </label>
              {paymentMethod === "card" && <div>Stripe</div>}
            </span>

            <button
              className={`full-button font-secondary ${
                !isValid || !dirty ? "button-disabled" : ""
              }`}
              type="submit"
              disabled={!isValid || !dirty}
            >
              Place order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
