import * as Yup from "yup";

import { forms } from 'consts/errors'

export const selecteValidation = Yup
    .string()
    .notOneOf(['select', undefined], forms.REQUIRED)

export const requiredField = Yup.string().required(forms.REQUIRED)
