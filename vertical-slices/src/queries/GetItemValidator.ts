import { GetItemQuery } from "./GetItemQuery";
import * as yup from "yup";

export const GetItemValidator = yup.object().shape({
  id: yup.string().required()
});
