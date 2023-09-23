import {FormikValues} from "formik";
import { object, string } from 'yup';

const requiredFieldError: string = "Required field!";

export const ContactFormOnSubmit = (values: FormikValues) => {
    console.log(values);
}

export const ContactFormValidationSchema = object({
    massage: string().required(requiredFieldError).min(10,"Message must be 10 characters at least"),
    email: string().email("Enter valid e-mail").required(requiredFieldError),
});