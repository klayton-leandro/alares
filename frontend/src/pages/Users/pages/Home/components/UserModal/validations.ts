import * as Yup from "yup";

import { regexp } from 'utils'
import { forms } from 'consts/errors'

export const formValidation = Yup.object().shape({
    name: Yup.string().required(forms.REQUIRED),   
    cpf: Yup.string().required(forms.REQUIRED).max(14),
    cep: Yup.string().required(forms.REQUIRED),
    state: Yup.string().required(forms.REQUIRED),
    city: Yup.string().required(forms.REQUIRED),
    number: Yup.string().required(forms.REQUIRED),
    publicArea: Yup.string().required(forms.REQUIRED),
    phone: Yup
      .string()
      .required(forms.REQUIRED)
      .matches(
        regexp.phone,
        forms.PHONE_FORMAT
      ),
    email: Yup.string().required(forms.REQUIRED),
    confEmail: Yup
      .string()
      .required(forms.REQUIRED)
      .oneOf([Yup.ref("email"), forms.SAME_EMAIL]),
    password: Yup
      .string()
      .required(forms.REQUIRED)
      .min(6, forms.INVALID_PASSWORD),
    confPassword: Yup
      .string()
      .required(forms.REQUIRED)
      .oneOf([Yup.ref("password"), forms.SAME_PASSWORD])
  });
