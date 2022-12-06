import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { setIsResetLinkSend, setIsForgotPassword } from "../store/slices/user";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { apiGetUsersForgotPassword } from "../utils/api";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export const ForgotPassword: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const resetLinkHandler = () => {
    dispatch(setIsResetLinkSend());
    navigate("/login");
  };
  const returnToLogin = () => {
    dispatch(setIsResetLinkSend());
  };
  const forgotPasswordHandler = () => {
    dispatch(setIsForgotPassword());
    navigate("/login");
  };

  const { isHoveringEmail, isResetLinkSend } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: (values: UsersValidation) => {
      setIsEmailSent(true);
      apiGetUsersForgotPassword(values.email);
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
            <>
              <p>We sent a link on your email</p>
              <button onClick={resetLinkHandler}>Back to login page</button>
            </>
          ) : (
            <div>
              <h1>Reset password</h1>
              <label htmlFor="email">Email</label>
              <input
                {...formik.getFieldProps("email")}
                // areCredentialsWrong={areCredentialsWrong}
              />
              {formik.errors.email && formik.touched.email && (
                <>{isHoveringEmail && <div>{formik.errors.email}</div>}</>
              )}
              <div>
                <button type="submit" onClick={returnToLogin}>
                  Request reset link
                </button>
                <button onClick={forgotPasswordHandler}>Cancel</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
