import * as Yup from "yup";

import { regexp } from 'utils'
import { forms } from 'consts/errors'

export const formValidation = Yup.object().shape({
    name: Yup.string().required(forms.REQUIRED)
  });
