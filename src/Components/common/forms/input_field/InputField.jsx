import { Field, ErrorMessage } from "formik";
const InputField = ({
  fieldType,
  inputType,
  fieldId,
  fieldName,
  fieldMaxLength,
  fieldPlaceHolder,
  fieldLabel,
  fieldOptions,
  fieldStyle,
}) => {
  let inputElement;
  if (fieldType === "input") {
    if (inputType === "range") {
      inputElement = (
        <label
          htmlFor={fieldId}
          className="small-paragrapgh font-primary flex items-start flex-col"
        >
          {fieldLabel}
          <input type="range" name={fieldName} id={fieldId} className="p-0" />
        </label>
      );
    } else {
      inputElement = (
        <fieldset
          className={`flex flex-col relative  ${fieldStyle && fieldStyle}`}
        >
          <Field
            type={inputType}
            name={fieldName}
            id={fieldId}
            placeholder={fieldPlaceHolder}
            maxLength={fieldMaxLength}
          />
          <ErrorMessage
            name={fieldName}
            id={fieldId}
            component="div"
            className="error-message"
          />
        </fieldset>
      );
    }
  } else if (fieldType === "textArea") {
    inputElement = (
      <fieldset className="relative">
        <Field
          as="textarea"
          name={fieldName}
          id={fieldId}
          placeholder={fieldPlaceHolder}
          maxLength={fieldMaxLength}
        />
        <ErrorMessage
          name={fieldName}
          id={fieldId}
          component="div"
          className="error-message"
        />
      </fieldset>
    );
  } else if (fieldType === "select") {
    inputElement = (
      <fieldset className="relative leading-[20px]">
        <Field as="select" name={fieldName} id={fieldId}>
          <option value="" disabled>
            {fieldLabel}
          </option>
          {fieldOptions.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage
          name={fieldName}
          id={fieldId}
          component="div"
          className="error-message"
        />
      </fieldset>
    );
  }
  return inputElement;
};

export default InputField;
