import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { registerUser } from "../store/slices/user";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { apiPostUsersRegister } from "../utils/api";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export const SignUp: React.FC = () => {
  // useState
  const [areCredentialsWrong, setAreCredentialsWrong] =
    useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  // useNavigate

  const navigate = useNavigate();

  // Redux
  const { isHoveringEmail } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch = useAppDispatch();

  const createNewUser = (values: UsersValidation) => {
    if (values.email) {
      dispatch(registerUser(values.email));
      setIsEmailSent(true);
      setAreCredentialsWrong(!areCredentialsWrong);
      apiPostUsersRegister(values.email);
    }
  };

  // Formik
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: (values: UsersValidation) => {
      createNewUser(values);
    },
  });

  return (
    <>
      <div>
        {/* <Logo src={NEW_CONSTANT.logo} /> */}
        {/* Logo must be here */}
        <form onSubmit={formik.handleSubmit} noValidate>
          <h1>Sign Up</h1>
          <label htmlFor="email">Email</label>
          <input
            {...formik.getFieldProps("email")}
            // areCredentialsWrong={areCredentialsWrong}
          />
          {formik.errors.email && formik.touched.email && (
            <>{isHoveringEmail && <div>{formik.errors.email}</div>}</>
          )}
          <div>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};
