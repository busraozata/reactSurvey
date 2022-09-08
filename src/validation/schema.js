import Yup from "./validate";

export const stepOneValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
});

export const stepTwoValidationSchema = Yup.object().shape({
  answer1: Yup.string().required(),
});

export const stepThreeValidationSchema = Yup.object().shape({
  answer2: Yup.string().required(),
});

export const stepLastValidationSchema = Yup.object().shape({
  answer3: Yup.string().required(),
});
