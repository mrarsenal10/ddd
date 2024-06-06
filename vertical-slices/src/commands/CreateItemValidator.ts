import * as yup from "yup";

export const CreateItemValidator = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
});
