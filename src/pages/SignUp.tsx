import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import {
  setIsForgotPassword,
  setIsResetLinkSend,
  registerUser,
} from "../store/slices/user";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export const SignUp: React.FC = () => {
  {
    /* useState */
  }
  const [areCredentialsWrong, setAreCredentialsWrong] =
    useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  {
    /* Redux */
  }
  const { isHoveringEmail, isForgotPassword, isResetLinkSend } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch = useAppDispatch();
  const forgotPasswordHandler = () => {
    dispatch(setIsForgotPassword());
  };
  const resetLinkHandler = () => {
    dispatch(setIsResetLinkSend());
  };
  const returnToLogin = () => {
    dispatch(setIsResetLinkSend());
    dispatch(setIsForgotPassword());
  };

  const createNewUser = (values: UsersValidation) => {
    dispatch(registerUser(values.email));
    setIsEmailSent(true);
  };

  {
    /* Formik */
  }
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: (values: UsersValidation) => {
      createNewUser(values);
      setAreCredentialsWrong(!areCredentialsWrong);
    },
  });

  return (
    <>
      {isEmailSent ? <Navigate to="/email" /> : null}

      <div>
        {/* <Logo src={NEW_CONSTANT.logo} /> */}
        {/* Logo must be here */}
        <form onSubmit={formik.handleSubmit} noValidate>
          {isResetLinkSend ? (
            <p>We sent a link on your email</p>
          ) : (
            <div>
              {isForgotPassword ? (
                <h1>Forgot your password</h1>
              ) : (
                <h1>Sign Up</h1>
              )}
              <label htmlFor="email">Email</label>
              <input
                {...formik.getFieldProps("email")}
                // areCredentialsWrong={areCredentialsWrong}
              />
              {formik.errors.email && formik.touched.email && (
                <>{isHoveringEmail && <div>{formik.errors.email}</div>}</>
              )}
            </div>
          )}
          {isResetLinkSend ? (
            <Link to="/">
              <button onClick={resetLinkHandler}>Back to login page</button>
            </Link>
          ) : (
            <div>
              {isForgotPassword ? (
                <button type="submit" onClick={returnToLogin}>
                  Request reset link
                </button>
              ) : (
                <button>Sign up</button>
              )}

              {isForgotPassword ? (
                <Link to="/">
                  <button onClick={forgotPasswordHandler}>Cancel</button>
                </Link>
              ) : (
                <div>
                  <Link to="/">Login</Link>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  );
};
