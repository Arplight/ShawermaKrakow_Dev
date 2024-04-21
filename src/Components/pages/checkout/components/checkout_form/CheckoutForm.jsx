import { Formik, Form } from "formik";
import Cities from "../../../../../Data/Cities/Cities.json";
import InputField from "../../../../common/forms/input_field/InputField";
import { useEffect, useState } from "react";
import { checkoutSchema } from "../../../../../Validation_schema/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  OrderShipping,
  OrderStoring,
  cartReset,
  fetchCart,
} from "../../../../redux/store/ApiStore";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const CheckoutForm = () => {
  // const [paymentMethod, setPaymentMethod] = useState("cash");
  const [currentCity, setCurrentCity] = useState("");
  const formCities = Cities.map((i) => i.shipping_city);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isLoading = useSelector((state) => state.orderStoring.loading);
  // Getting current shipping price
  useEffect(() => {
    if (currentCity.trim() !== "") {
      dispatch(OrderShipping(currentCity));
    }
  }, [currentCity, dispatch]);

  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-2 py-4">
      <Formik
        onSubmit={async (values, { resetForm }) => {
          dispatch(OrderStoring(values)).then((response) => {
            if (response.payload) {
              resetForm();
              dispatch(cartReset()).then(() => {
                dispatch(fetchCart());
                navigate("/");
              });
            }
          });
        }}
        initialValues={{
          checkout_email: "",
          checkout_phone_number: "",
          checkout_first_name: "",
          checkout_last_name: "",
          checkout_address: "",
          checkout_city: "",
          checkout_country: "POLAND",
          checkout_payment_method: "cash",
        }}
        validationSchema={checkoutSchema}
      >
        {({ values, isValid, dirty }) => {
          values.checkout_city && setCurrentCity(values.checkout_city);
          return (
            <Form className="flex flex-col gap-2">
              <span className="flex flex-col gap-1 w-full">
                <h3 className="font-primary">{t("Contact")}</h3>
                <InputField
                  fieldType={"input"}
                  inputType={"email"}
                  fieldId={"checkout_email"}
                  fieldName={"checkout_email"}
                  fieldPlaceHolder={t("email")}
                  fieldMaxLength={100}
                />
                <InputField
                  fieldType={"input"}
                  inputType={"text"}
                  fieldId={"checkout_phone_number"}
                  fieldName={"checkout_phone_number"}
                  fieldPlaceHolder={t("mobile_phone_number")}
                  fieldMaxLength={16}
                />
              </span>
              <span className="flex flex-col gap-1 w-full">
                <h3 className="font-primary">{t("delivery")}</h3>
                <InputField
                  fieldType={"select"}
                  fieldId={"checkout_city"}
                  fieldName={"checkout_city"}
                  fieldOptions={formCities}
                  fieldLabel={t("city")}
                />
                <div className="flex flex-col lg:flex-row w-full gap-1">
                  <InputField
                    fieldType={"input"}
                    inputType={"text"}
                    fieldId={"checkout_first_name"}
                    fieldName={"checkout_first_name"}
                    fieldPlaceHolder={t("first_name")}
                    fieldStyle={"w-full lg:w-1/2"}
                    fieldMaxLength={21}
                  />
                  <InputField
                    fieldType={"input"}
                    inputType={"text"}
                    fieldId={"checkout_last_name"}
                    fieldName={"checkout_last_name"}
                    fieldPlaceHolder={t("last_name")}
                    fieldStyle={"w-full lg:w-1/2"}
                    fieldMaxLength={21}
                  />
                </div>
                <InputField
                  fieldType={"input"}
                  inputType={"text"}
                  fieldId={"checkout_address"}
                  fieldName={"checkout_address"}
                  fieldPlaceHolder={t("address")}
                  fieldMaxLength={101}
                />
              </span>
              {/* <span className="flex flex-col gap-1 w-full">
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
            </span> */}

              <button
                className={`full-button font-secondary leading-[0px] py-[20px] ${
                  !isValid || !dirty ? "button-disabled" : ""
                }`}
                type="submit"
                disabled={!isValid || !dirty}
              >
                {isLoading ? (
                  <PuffLoader
                    color="#ffffff"
                    size={20}
                    className=""
                    cssOverride={{ position: "absolute" }}
                  />
                ) : (
                  t("place_order")
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
