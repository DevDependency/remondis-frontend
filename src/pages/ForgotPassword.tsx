import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { setIsResetLinkSend, setIsForgotPassword } from "../store/slices/user";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { apiGetUsersForgotPassword } from "../utils/api";
import {
  AuthorizationWrapper,
  AuthorizationForm,
  AuthorizationContainer,
  LogoStyled,
  TitleLogin,
  InputLabel,
  AuthorizationInput,
  AuthorizationInputContainer,
  AuthorizationLinksContainer,
  ButtonStyled,
  AuthorizationInputTitleContainer,
} from "../styles/style";
import { logo } from "../assets";

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
      if (values.email) {
        setIsEmailSent(true);
        apiGetUsersForgotPassword(values.email);
        dispatch(setIsResetLinkSend());
      }
    },
  });

  return (
    <>
      <AuthorizationWrapper>
        <AuthorizationForm>
          <AuthorizationContainer onSubmit={formik.handleSubmit} noValidate>
            <LogoStyled src={logo} isSignUp={true} />
            {!isEmailSent ? (
              <>
                {isResetLinkSend ? (
                  <>
                    <p>We sent a link on your email</p>
                    <button onClick={resetLinkHandler}>
                      Back to login page
                    </button>
                  </>
                ) : (
                  <AuthorizationContainer>
                    <AuthorizationInputTitleContainer>
                      <TitleLogin isSignUp={true}>Reset password</TitleLogin>
                      <AuthorizationInputContainer>
                        <InputLabel htmlFor="email" isSignUp={true}>
                          Email
                        </InputLabel>
                        <AuthorizationInput
                          {...formik.getFieldProps("email")}
                          // areCredentialsWrong={areCredentialsWrong}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <>
                            {isHoveringEmail && (
                              <div>{formik.errors.email}</div>
                            )}
                          </>
                        )}
                      </AuthorizationInputContainer>
                    </AuthorizationInputTitleContainer>
                    <AuthorizationLinksContainer>
                      <button type="submit">
                        <ButtonStyled isSignUp={true} color={"red"}>
                          Request reset link
                        </ButtonStyled>
                      </button>
                      <button type="submit">
                        <ButtonStyled
                          onClick={forgotPasswordHandler}
                          isSignUp={true}
                        >
                          Cancel
                        </ButtonStyled>
                      </button>
                    </AuthorizationLinksContainer>
                  </AuthorizationContainer>
                )}
              </>
            ) : (
              <div>
                <h1> Email is sent </h1>
              </div>
            )}
          </AuthorizationContainer>
        </AuthorizationForm>
      </AuthorizationWrapper>
    </>
  );
};
